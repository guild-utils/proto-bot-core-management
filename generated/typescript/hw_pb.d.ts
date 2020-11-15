// package: 
// file: hw.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DictionaryEntryA extends jspb.Message { 
    getFrom(): string;
    setFrom(value: string): DictionaryEntryA;

    getTo(): string;
    setTo(value: string): DictionaryEntryA;

    getP(): string;
    setP(value: string): DictionaryEntryA;

    getP1(): string;
    setP1(value: string): DictionaryEntryA;

    getP2(): string;
    setP2(value: string): DictionaryEntryA;

    getP3(): string;
    setP3(value: string): DictionaryEntryA;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictionaryEntryA.AsObject;
    static toObject(includeInstance: boolean, msg: DictionaryEntryA): DictionaryEntryA.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictionaryEntryA, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictionaryEntryA;
    static deserializeBinaryFromReader(message: DictionaryEntryA, reader: jspb.BinaryReader): DictionaryEntryA;
}

export namespace DictionaryEntryA {
    export type AsObject = {
        from: string,
        to: string,
        p: string,
        p1: string,
        p2: string,
        p3: string,
    }
}
