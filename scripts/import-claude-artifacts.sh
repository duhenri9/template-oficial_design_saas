#!/usr/bin/env bash
set -euo pipefail

SRC_PATH="${1:-}"

if [[ -z "${SRC_PATH}" ]]; then
  echo "Uso: $0 /caminho/para/artefatos"
  exit 1
fi

if [[ ! -d "${SRC_PATH}" ]]; then
  echo "Erro: '${SRC_PATH}' não é um diretório válido"
  exit 1
fi

DEST_DIR="src/claude-artifacts"
mkdir -p "${DEST_DIR}"

echo "➡️  Importando de: ${SRC_PATH}"
echo "📁 Destino: ${DEST_DIR}"

rsync -avh \
  --exclude node_modules \
  --exclude .next \
  --exclude .git \
  --exclude .DS_Store \
  "${SRC_PATH}/" "${DEST_DIR}/"

echo "✅ Importação concluída."
echo "Dica: atualize imports para usar '@/*' ou 'src/claude-artifacts/*' conforme necessário."

