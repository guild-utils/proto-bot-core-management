protoc -I protos --js_out=import_style=commonjs,binary:./generated/typescript --ts_out=import_style=commonjs,binary:./generated/typescript --grpc_out=grpc_js:./generated/typescript --proto_path=./ -I ./generated/typescript --plugin=protoc-gen-grpc="./node_modules/.bin/grpc_tools_node_protoc_plugin" --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" ./protos/*.proto
