{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  buildInputs = [
    hugo
<<<<<<< HEAD
    docker
    docker-compose
=======
>>>>>>> master
  ];
}
