export async function configMiddleware(ctx: Context, next: () => Promise<void>) {
  const {
    clients: { masterdata },
  } = ctx

  const response = await masterdata.searchDocuments({
    dataEntity: 'CF',
    fields: [
      'id',
      'cookieFortune',
    ],
    pagination: {
      page: 1,
      pageSize: 10,
    },
    sort: 'createdIn DESC',
    schema: 'v1',
  })

  ctx.status = 200
  ctx.body = {
    data: response,
  }

  await next()
}
