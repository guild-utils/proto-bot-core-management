// package: management_app.config.common
// file: config.proto

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

export class DictionaryEntryB extends jspb.Message { 
    getFrom(): string;
    setFrom(value: string): DictionaryEntryB;

    getTo(): string;
    setTo(value: string): DictionaryEntryB;

    getIndex(): number;
    setIndex(value: number): DictionaryEntryB;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DictionaryEntryB.AsObject;
    static toObject(includeInstance: boolean, msg: DictionaryEntryB): DictionaryEntryB.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DictionaryEntryB, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DictionaryEntryB;
    static deserializeBinaryFromReader(message: DictionaryEntryB, reader: jspb.BinaryReader): DictionaryEntryB;
}

export namespace DictionaryEntryB {
    export type AsObject = {
        from: string,
        to: string,
        index: number,
    }
}

export class Dictionary extends jspb.Message { 
    clearBeforeList(): void;
    getBeforeList(): Array<DictionaryEntryB>;
    setBeforeList(value: Array<DictionaryEntryB>): Dictionary;
    addBefore(value?: DictionaryEntryB, index?: number): DictionaryEntryB;

    clearEntrysList(): void;
    getEntrysList(): Array<DictionaryEntryA>;
    setEntrysList(value: Array<DictionaryEntryA>): Dictionary;
    addEntrys(value?: DictionaryEntryA, index?: number): DictionaryEntryA;

    clearAfterList(): void;
    getAfterList(): Array<DictionaryEntryB>;
    setAfterList(value: Array<DictionaryEntryB>): Dictionary;
    addAfter(value?: DictionaryEntryB, index?: number): DictionaryEntryB;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dictionary.AsObject;
    static toObject(includeInstance: boolean, msg: Dictionary): Dictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dictionary;
    static deserializeBinaryFromReader(message: Dictionary, reader: jspb.BinaryReader): Dictionary;
}

export namespace Dictionary {
    export type AsObject = {
        beforeList: Array<DictionaryEntryB.AsObject>,
        entrysList: Array<DictionaryEntryA.AsObject>,
        afterList: Array<DictionaryEntryB.AsObject>,
    }
}
