## Intro
browser based anonymous chat room.

## Deploy

### Backend

git clone https://github.com/Tonvin/brag.git

cd brag

go mod init brag

go mod tidy

go run *.go

## Frontend

apt install node
apt install npm
npm run build

## Log
/tmp/brag.log

## Demo Site

https://brag.pub

## Live Reload for developing
go install github.com/cosmtrek/air@latest
./bin/air

## Nginx
see fale nginx

## License
This project is licensed under the [The MIT License](https://opensource.org/licenses/MIT).
