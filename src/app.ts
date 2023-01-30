/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "app";

export interface Person {
  name: string;
  age: number;
}

export interface Address {
  street: string;
  state: string;
}

export interface Details {
  person: Person | undefined;
  address: Address | undefined;
}

export interface AccumulateInput {
  person: Person | undefined;
  address: Address | undefined;
}

function createBasePerson(): Person {
  return { name: "", age: 0 };
}

export const Person = {
  encode(message: Person, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(16).int32(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Person {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.age = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Person {
    return { name: isSet(object.name) ? String(object.name) : "", age: isSet(object.age) ? Number(object.age) : 0 };
  },

  toJSON(message: Person): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = Math.round(message.age));
    return obj;
  },

  create<I extends Exact<DeepPartial<Person>, I>>(base?: I): Person {
    return Person.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Person>, I>>(object: I): Person {
    const message = createBasePerson();
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

function createBaseAddress(): Address {
  return { street: "", state: "" };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.street !== "") {
      writer.uint32(10).string(message.street);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.street = reader.string();
          break;
        case 2:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      street: isSet(object.street) ? String(object.street) : "",
      state: isSet(object.state) ? String(object.state) : "",
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.street !== undefined && (obj.street = message.street);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.street = object.street ?? "";
    message.state = object.state ?? "";
    return message;
  },
};

function createBaseDetails(): Details {
  return { person: undefined, address: undefined };
}

export const Details = {
  encode(message: Details, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.person !== undefined) {
      Person.encode(message.person, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Details {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.person = Person.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Details {
    return {
      person: isSet(object.person) ? Person.fromJSON(object.person) : undefined,
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
    };
  },

  toJSON(message: Details): unknown {
    const obj: any = {};
    message.person !== undefined && (obj.person = message.person ? Person.toJSON(message.person) : undefined);
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Details>, I>>(base?: I): Details {
    return Details.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Details>, I>>(object: I): Details {
    const message = createBaseDetails();
    message.person = (object.person !== undefined && object.person !== null)
      ? Person.fromPartial(object.person)
      : undefined;
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    return message;
  },
};

function createBaseAccumulateInput(): AccumulateInput {
  return { person: undefined, address: undefined };
}

export const AccumulateInput = {
  encode(message: AccumulateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.person !== undefined) {
      Person.encode(message.person, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.person = Person.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = Address.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccumulateInput {
    return {
      person: isSet(object.person) ? Person.fromJSON(object.person) : undefined,
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
    };
  },

  toJSON(message: AccumulateInput): unknown {
    const obj: any = {};
    message.person !== undefined && (obj.person = message.person ? Person.toJSON(message.person) : undefined);
    message.address !== undefined && (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccumulateInput>, I>>(base?: I): AccumulateInput {
    return AccumulateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccumulateInput>, I>>(object: I): AccumulateInput {
    const message = createBaseAccumulateInput();
    message.person = (object.person !== undefined && object.person !== null)
      ? Person.fromPartial(object.person)
      : undefined;
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    return message;
  },
};

export interface AppController {
  Accumulate(request: AccumulateInput): Promise<Details>;
}

export class AppControllerClientImpl implements AppController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "app.AppController";
    this.rpc = rpc;
    this.Accumulate = this.Accumulate.bind(this);
  }
  Accumulate(request: AccumulateInput): Promise<Details> {
    const data = AccumulateInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "Accumulate", data);
    return promise.then((data) => Details.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
