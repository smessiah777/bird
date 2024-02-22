# bird

- clone repo
- npm i
- create .env file

## Preview

<p align="center">
  <img width="1436" height="" src="./public/assets/readme/bird_preview.gif">
</p>

## Notes

- Used the [News API](https://newsapi.org/)
- First two news stories are fetched on the server using RSCs.
- Last two news stories are fetched on the client using [Tanstack Query](https://tanstack.com/query/latest).
- In a larger production project might be a good idea to use [Zod](https://zod.dev/) for validation.
