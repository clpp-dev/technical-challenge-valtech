import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from 'react-apollo'
import { FormattedMessage } from 'react-intl'
import {
    Spinner,
    Table,
    Alert,
    ModalDialog,
    IconDelete,
    IconEdit,
    ButtonWithIcon,
    Button,
    Textarea
} from 'vtex.styleguide'
import GET_DOCUMENTS from '../../graphql/getCookiesFortune.graphql'
import CREATE_DOCUMENT from '../../graphql/createDocument.graphql'
import DELETE_DOCUMENT from '../../graphql/deleteDocument.graphql'
import UPDATE_DOCUMENT from '../../graphql/updateDocument.graphql'

import {
    CookieFortuneData,
    NewFortuneState,
    NotificationState,
    TableDataItem,
    TableSchema,
    GraphQLQueryVariables,
    CreateDocumentVariables,
    UpdateDocumentVariables,
    DeleteDocumentVariables,
    CookieFortuneDocument,
    CookieFortuneField
} from './types'

const AdminCookiesFortuneManagment: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [ntf, setNotification] = useState<NotificationState>({
        active: false,
        type: "error",
        text: "error"
    })

    const { data, loading, error, refetch } = useQuery<CookieFortuneData, GraphQLQueryVariables>(GET_DOCUMENTS, {
        variables: {
            "acronym": "CF",
            "fields": [
                "id",
                "CookieFortune"
            ],
            "sort": "createdIn DESC",
            "pageSize": "100"
        }
    })

    const [newFortune, setNewFortune] = useState<NewFortuneState>({
        CookieFortune: "",
        id: ""
    })

    const [deleteDocument] = useMutation<any, DeleteDocumentVariables>(DELETE_DOCUMENT, {
        onCompleted: () => {
            setNotification({
                active: true,
                type: "success",
                text: "Se ha eliminado la frase correctamente"
            })
            setTimeout(() => {
              refetch()
            }, 1000)
        },
        onError: () => {
            setNotification({
                active: true,
                type: "error",
                text: "No se pudo eliminar la frase, por favor intenta nuevamente"
            })
        },
    })

    const [createDocument] = useMutation<any, CreateDocumentVariables>(CREATE_DOCUMENT, {
        onCompleted: () => {
            setNotification({
                active: true,
                type: "success",
                text: "Se ha creado la frase correctamente"
            })

            setTimeout(() => {
              refetch()
            }, 500)

            handleModalToggle()
        },
        onError: (error) => {
            console.error('Create error:', error)
            setNotification({
                active: true,
                type: "error",
                text: `No se pudo crear la frase: ${error.message}`
            })
        },
    })

    const [editDocument] = useMutation<any, UpdateDocumentVariables>(UPDATE_DOCUMENT, {
        onCompleted: () => {
            setNotification({
                active: true,
                type: "success",
                text: "Se ha editado la frase correctamente"
            })

            setTimeout(() => {
              refetch()
            }, 1000)

            handleModalToggle()
        },
        onError: (error) => {
            setNotification({
                active: true,
                type: "error",
                text: `No se pudo editar la frase: ${error.message}`
            })
            handleModalToggle()
        },
    })

    const handleModalToggle = () => {
        setModalOpen(!modalOpen)
        if (modalOpen) {
            setNewFortune({
                CookieFortune: "",
                id: ""
            })
            setEditMode(false)
        }
    }

    const handleSave = () => {
        if (!newFortune.CookieFortune.trim()) {
            setNotification({
                active: true,
                type: "error",
                text: "La frase es requerida"
            })
            return
        }

        if (editMode) {
            editDocument({
                variables: {
                acronym: "CF",
                documentId: newFortune.id,
                document: {
                    fields: [
                        {
                            key: "CookieFortune",
                            value: newFortune.CookieFortune
                        }
                    ]
                }
            }
            })
        } else {
            createDocument({
                variables: {
                    acronym: "CF",
                    document: {
                        fields: [
                            {
                                key: "CookieFortune",
                                value: newFortune.CookieFortune
                            }
                        ]
                    }
                }
            })
        }
    }

    const handleEdit = (item: CookieFortuneDocument): void => {
        const fortune = item.fields.find((field: CookieFortuneField) => field.key === 'CookieFortune')?.value || ""
        const id = item.fields.find((field: CookieFortuneField) => field.key === 'id')?.value || ""

        setNewFortune({
            CookieFortune: fortune,
            id: item.documentId || id  // Use documentId first, then fallback to id field
        })
        setEditMode(true)
        setModalOpen(true)
    }

    const handleDelete = (item: CookieFortuneDocument): void => {
        const id = item.documentId || item.fields.find((field: CookieFortuneField) => field.key === 'id')?.value

        if (id) {
            deleteDocument({
                variables: {
                    acronym: "CF",
                    documentId: id
                }
            })
        }
    }

    useEffect(() => {
        if (ntf.active) {
            const timer = setTimeout(() => {
                setNotification({
                    active: false,
                    type: "error",
                    text: "error"
                })
            }, 3000)
            return () => clearTimeout(timer)
        }
        return undefined
    }, [ntf.active])

    if (loading) return <Spinner />
    if (error) return <Alert type="error">Error cargando las frases de la fortuna</Alert>

    const tableData: TableDataItem[] = data?.documents?.map((item: CookieFortuneDocument) => {

        const fortune = item.fields.find((field: CookieFortuneField) => field.key === 'CookieFortune')?.value || ""
        const id = item.fields.find((field: CookieFortuneField) => field.key === 'id')?.value || ""

        return {
            id,
            phrase: fortune,
            actions: (
                <div className="flex gap-2">
                    <ButtonWithIcon
                        icon={<IconEdit />}
                        variation="tertiary"
                        onClick={() => handleEdit(item)}
                    />
                    <ButtonWithIcon
                        icon={<IconDelete />}
                        variation="danger-tertiary"
                        onClick={() => handleDelete(item)}
                    />
                </div>
            )
        }
    }) || []

    const tableSchema: TableSchema = {
        properties: {
            phrase: {
                title: <FormattedMessage id="cookiesfortune.input.phrase" />,
            },
            actions: {
                title: <FormattedMessage id="cookiesfortune.input.actions" />,
                width: 100
            }
        }
    }

    return (
        <div className="pa6" style={{ width: '100%', maxWidth: '100%' }}>
            {ntf.active && (
                <div className="mb5">
                    <Alert type={ntf.type}>{ntf.text}</Alert>
                </div>
            )}

            <div className="mb5">
                <Button
                    variation="primary"
                    onClick={() => setModalOpen(true)}
                >
                    <FormattedMessage id="cookiesfortune.button.add" />
                </Button>
            </div>

            <div style={{ width: '100%' }}>
                <Table
                    fullWidth
                    schema={tableSchema}
                    items={tableData}
                    loading={loading}
                />
            </div>

            <ModalDialog
                centered
                confirmation={{
                    onClick: handleSave,
                    label: <FormattedMessage id="cookiesfortune.button.save" />
                }}
                cancelation={{
                    onClick: handleModalToggle,
                    label: <FormattedMessage id="cookiesfortune.button.cancel" />
                }}
                isOpen={modalOpen}
                onClose={handleModalToggle}
            >
                <div className="pa4">
                    <h3 className="mb4">
                      {
                        editMode ? (
                          <FormattedMessage id="cookiesfortune.modal.title.edit" />
                        ) : (
                          <FormattedMessage id="cookiesfortune.modal.title.create" />
                        )}
                    </h3>
                    <div className="mb4">
                        <Textarea
                          label={<FormattedMessage id="cookiesfortune.input.phrase" />}
                          value={newFortune.CookieFortune}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewFortune({
                              ...newFortune,
                              CookieFortune: e.target.value
                          })}
                          required
                          rows={3}
                        />
                    </div>
                </div>
            </ModalDialog>
        </div>
    )
}

export default AdminCookiesFortuneManagment
