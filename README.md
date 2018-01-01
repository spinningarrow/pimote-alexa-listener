# pimote-alexa-listener

Listens to messages published by [pimote-alexa-skill][] and calls
[pimote-api][].

## Run

    npm i
	env PUBNUB_SUBSCRIBE_KEY='your-subscribe-key' npm start

## Develop

This project uses [nix][] and [direnv][] to manage dependencies and the project
environment.

[pimote-alexa-skill]: https://github.com/spinningarrow/pimote-alexa-skill
[pimote-api]: https://github.com/spinningarrow/pimote-api
[nix]: https://nixos.org/nix/
[direnv]: https://direnv.net/
