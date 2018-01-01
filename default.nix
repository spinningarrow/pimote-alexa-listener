let pkgs = import <nixpkgs> {};

in pkgs.stdenv.mkDerivation rec {
  name = "pimote-alexa-listener";

  buildInputs = with pkgs; [
    nodejs-9_x
  ];
}
