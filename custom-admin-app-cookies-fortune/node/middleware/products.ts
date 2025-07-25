export async function cookiesFortuneMiddleware(
  ctx: Context,
  next: () => Promise<void>
) {
  const {
    clients: { masterdata },
  } = ctx

  try {
    const response = await masterdata.searchDocuments({
      dataEntity: 'CF',
      fields: ['id', 'cookieFortune', 'createdIn'],
      pagination: {
        page: 1,
        pageSize: 100,
      },
      sort: 'createdIn DESC',
      schema: 'v1',
    })

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 500
    ctx.body = { error: error.message }
  }

  await next()
}
