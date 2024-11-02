export const config = {
  port:process.env['PORT'] || 8000,
  mongoose:{
    db:process.env['DATABASE_URL'] || 'mongodb://localhost/newsApp'
  }
}