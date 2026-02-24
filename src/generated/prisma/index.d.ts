/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model profile
 *
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>;
/**
 * Model donation
 *
 */
export type donation = $Result.DefaultSelection<Prisma.$donationPayload>;
/**
 * Model transaction
 *
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>;
/**
 * Model overlay
 *
 */
export type overlay = $Result.DefaultSelection<Prisma.$overlayPayload>;
/**
 * Model goal
 *
 */
export type goal = $Result.DefaultSelection<Prisma.$goalPayload>;
/**
 * Model api_queue
 *
 */
export type api_queue = $Result.DefaultSelection<Prisma.$api_queuePayload>;
/**
 * Model api_callback
 *
 */
export type api_callback =
  $Result.DefaultSelection<Prisma.$api_callbackPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const donation_status: {
    PENDING: 'PENDING';
    SUCCESS: 'SUCCESS';
    FAILED: 'FAILED';
    EXPIRED: 'EXPIRED';
  };

  export type donation_status =
    (typeof donation_status)[keyof typeof donation_status];

  export const transaction_status: {
    PENDING: 'PENDING';
    SUCCESS: 'SUCCESS';
    FAILED: 'FAILED';
    EXPIRED: 'EXPIRED';
    REFUNDED: 'REFUNDED';
  };

  export type transaction_status =
    (typeof transaction_status)[keyof typeof transaction_status];

  export const overlay_type: {
    ALERT: 'ALERT';
    GOAL: 'GOAL';
    EVENT_LIST: 'EVENT_LIST';
  };

  export type overlay_type = (typeof overlay_type)[keyof typeof overlay_type];

  export const queue_status: {
    PENDING: 'PENDING';
    PROCESSING: 'PROCESSING';
    COMPLETED: 'COMPLETED';
    FAILED: 'FAILED';
  };

  export type queue_status = (typeof queue_status)[keyof typeof queue_status];
}

export type donation_status = $Enums.donation_status;

export const donation_status: typeof $Enums.donation_status;

export type transaction_status = $Enums.transaction_status;

export const transaction_status: typeof $Enums.transaction_status;

export type overlay_type = $Enums.overlay_type;

export const overlay_type: typeof $Enums.overlay_type;

export type queue_status = $Enums.queue_status;

export const queue_status: typeof $Enums.queue_status;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **donation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Donations
   * const donations = await prisma.donation.findMany()
   * ```
   */
  get donation(): Prisma.donationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
   * ```
   */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.overlay`: Exposes CRUD operations for the **overlay** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Overlays
   * const overlays = await prisma.overlay.findMany()
   * ```
   */
  get overlay(): Prisma.overlayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **goal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Goals
   * const goals = await prisma.goal.findMany()
   * ```
   */
  get goal(): Prisma.goalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_queue`: Exposes CRUD operations for the **api_queue** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Api_queues
   * const api_queues = await prisma.api_queue.findMany()
   * ```
   */
  get api_queue(): Prisma.api_queueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_callback`: Exposes CRUD operations for the **api_callback** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Api_callbacks
   * const api_callbacks = await prisma.api_callback.findMany()
   * ```
   */
  get api_callback(): Prisma.api_callbackDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    user: 'user';
    profile: 'profile';
    donation: 'donation';
    transaction: 'transaction';
    overlay: 'overlay';
    goal: 'goal';
    api_queue: 'api_queue';
    api_callback: 'api_callback';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'profile'
        | 'donation'
        | 'transaction'
        | 'overlay'
        | 'goal'
        | 'api_queue'
        | 'api_callback';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      profile: {
        payload: Prisma.$profilePayload<ExtArgs>;
        fields: Prisma.profileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.profileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.profileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          findFirst: {
            args: Prisma.profileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.profileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          findMany: {
            args: Prisma.profileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[];
          };
          create: {
            args: Prisma.profileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          createMany: {
            args: Prisma.profileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.profileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[];
          };
          delete: {
            args: Prisma.profileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          update: {
            args: Prisma.profileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          deleteMany: {
            args: Prisma.profileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.profileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.profileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[];
          };
          upsert: {
            args: Prisma.profileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$profilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.profileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.profileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      donation: {
        payload: Prisma.$donationPayload<ExtArgs>;
        fields: Prisma.donationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.donationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.donationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>;
          };
          findFirst: {
            args: Prisma.donationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.donationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>;
          };
          findMany: {
            args: Prisma.donationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[];
          };
          create: {
            args: Prisma.donationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>;
          };
          createMany: {
            args: Prisma.donationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.donationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[];
          };
          delete: {
            args: Prisma.donationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>;
          };
          update: {
            args: Prisma.donationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>;
          };
          deleteMany: {
            args: Prisma.donationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.donationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.donationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[];
          };
          upsert: {
            args: Prisma.donationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donationPayload>;
          };
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDonation>;
          };
          groupBy: {
            args: Prisma.donationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DonationGroupByOutputType>[];
          };
          count: {
            args: Prisma.donationCountArgs<ExtArgs>;
            result: $Utils.Optional<DonationCountAggregateOutputType> | number;
          };
        };
      };
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>;
        fields: Prisma.transactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[];
          };
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[];
          };
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[];
          };
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransaction>;
          };
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionCountAggregateOutputType>
              | number;
          };
        };
      };
      overlay: {
        payload: Prisma.$overlayPayload<ExtArgs>;
        fields: Prisma.overlayFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.overlayFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.overlayFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>;
          };
          findFirst: {
            args: Prisma.overlayFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.overlayFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>;
          };
          findMany: {
            args: Prisma.overlayFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>[];
          };
          create: {
            args: Prisma.overlayCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>;
          };
          createMany: {
            args: Prisma.overlayCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.overlayCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>[];
          };
          delete: {
            args: Prisma.overlayDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>;
          };
          update: {
            args: Prisma.overlayUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>;
          };
          deleteMany: {
            args: Prisma.overlayDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.overlayUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.overlayUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>[];
          };
          upsert: {
            args: Prisma.overlayUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$overlayPayload>;
          };
          aggregate: {
            args: Prisma.OverlayAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOverlay>;
          };
          groupBy: {
            args: Prisma.overlayGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OverlayGroupByOutputType>[];
          };
          count: {
            args: Prisma.overlayCountArgs<ExtArgs>;
            result: $Utils.Optional<OverlayCountAggregateOutputType> | number;
          };
        };
      };
      goal: {
        payload: Prisma.$goalPayload<ExtArgs>;
        fields: Prisma.goalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.goalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.goalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          findFirst: {
            args: Prisma.goalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.goalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          findMany: {
            args: Prisma.goalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[];
          };
          create: {
            args: Prisma.goalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          createMany: {
            args: Prisma.goalCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.goalCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[];
          };
          delete: {
            args: Prisma.goalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          update: {
            args: Prisma.goalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          deleteMany: {
            args: Prisma.goalDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.goalUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.goalUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[];
          };
          upsert: {
            args: Prisma.goalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGoal>;
          };
          groupBy: {
            args: Prisma.goalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GoalGroupByOutputType>[];
          };
          count: {
            args: Prisma.goalCountArgs<ExtArgs>;
            result: $Utils.Optional<GoalCountAggregateOutputType> | number;
          };
        };
      };
      api_queue: {
        payload: Prisma.$api_queuePayload<ExtArgs>;
        fields: Prisma.api_queueFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.api_queueFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.api_queueFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>;
          };
          findFirst: {
            args: Prisma.api_queueFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.api_queueFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>;
          };
          findMany: {
            args: Prisma.api_queueFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>[];
          };
          create: {
            args: Prisma.api_queueCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>;
          };
          createMany: {
            args: Prisma.api_queueCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.api_queueCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>[];
          };
          delete: {
            args: Prisma.api_queueDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>;
          };
          update: {
            args: Prisma.api_queueUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>;
          };
          deleteMany: {
            args: Prisma.api_queueDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.api_queueUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.api_queueUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>[];
          };
          upsert: {
            args: Prisma.api_queueUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_queuePayload>;
          };
          aggregate: {
            args: Prisma.Api_queueAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApi_queue>;
          };
          groupBy: {
            args: Prisma.api_queueGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Api_queueGroupByOutputType>[];
          };
          count: {
            args: Prisma.api_queueCountArgs<ExtArgs>;
            result: $Utils.Optional<Api_queueCountAggregateOutputType> | number;
          };
        };
      };
      api_callback: {
        payload: Prisma.$api_callbackPayload<ExtArgs>;
        fields: Prisma.api_callbackFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.api_callbackFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.api_callbackFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>;
          };
          findFirst: {
            args: Prisma.api_callbackFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.api_callbackFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>;
          };
          findMany: {
            args: Prisma.api_callbackFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>[];
          };
          create: {
            args: Prisma.api_callbackCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>;
          };
          createMany: {
            args: Prisma.api_callbackCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.api_callbackCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>[];
          };
          delete: {
            args: Prisma.api_callbackDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>;
          };
          update: {
            args: Prisma.api_callbackUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>;
          };
          deleteMany: {
            args: Prisma.api_callbackDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.api_callbackUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.api_callbackUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>[];
          };
          upsert: {
            args: Prisma.api_callbackUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$api_callbackPayload>;
          };
          aggregate: {
            args: Prisma.Api_callbackAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApi_callback>;
          };
          groupBy: {
            args: Prisma.api_callbackGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Api_callbackGroupByOutputType>[];
          };
          count: {
            args: Prisma.api_callbackCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Api_callbackCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: userOmit;
    profile?: profileOmit;
    donation?: donationOmit;
    transaction?: transactionOmit;
    overlay?: overlayOmit;
    goal?: goalOmit;
    api_queue?: api_queueOmit;
    api_callback?: api_callbackOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    donations: number;
    received_donations: number;
    overlays: number;
    goals: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    donations?: boolean | UserCountOutputTypeCountDonationsArgs;
    received_donations?:
      | boolean
      | UserCountOutputTypeCountReceived_donationsArgs;
    overlays?: boolean | UserCountOutputTypeCountOverlaysArgs;
    goals?: boolean | UserCountOutputTypeCountGoalsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: donationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceived_donationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: donationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOverlaysArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: overlayWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: goalWhereInput;
  };

  /**
   * Count Type DonationCountOutputType
   */

  export type DonationCountOutputType = {
    transactions: number;
  };

  export type DonationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transactions?: boolean | DonationCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * DonationCountOutputType without action
   */
  export type DonationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DonationCountOutputType
     */
    select?: DonationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DonationCountOutputType without action
   */
  export type DonationCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    password: string | null;
    display_name: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    username: string | null;
    password: string | null;
    display_name: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    username: number;
    password: number;
    display_name: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    password?: true;
    display_name?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    password?: true;
    display_name?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    password?: true;
    display_name?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
    orderBy?:
      | userOrderByWithAggregationInput
      | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    username: string;
    password: string;
    display_name: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      password?: boolean;
      display_name?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      profile?: boolean | user$profileArgs<ExtArgs>;
      donations?: boolean | user$donationsArgs<ExtArgs>;
      received_donations?: boolean | user$received_donationsArgs<ExtArgs>;
      overlays?: boolean | user$overlaysArgs<ExtArgs>;
      goals?: boolean | user$goalsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      password?: boolean;
      display_name?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      username?: boolean;
      password?: boolean;
      display_name?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    username?: boolean;
    password?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type userOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'username'
    | 'password'
    | 'display_name'
    | 'avatar_url'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['user']
  >;
  export type userInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    profile?: boolean | user$profileArgs<ExtArgs>;
    donations?: boolean | user$donationsArgs<ExtArgs>;
    received_donations?: boolean | user$received_donationsArgs<ExtArgs>;
    overlays?: boolean | user$overlaysArgs<ExtArgs>;
    goals?: boolean | user$goalsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type userIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type userIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $userPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'user';
    objects: {
      profile: Prisma.$profilePayload<ExtArgs> | null;
      donations: Prisma.$donationPayload<ExtArgs>[];
      received_donations: Prisma.$donationPayload<ExtArgs>[];
      overlays: Prisma.$overlayPayload<ExtArgs>[];
      goals: Prisma.$goalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        username: string;
        password: string;
        display_name: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> =
    $Result.GetResult<Prisma.$userPayload, S>;

  type userCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['user'];
      meta: { name: 'user' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(
      args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(
      args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    profile<T extends user$profileArgs<ExtArgs> = {}>(
      args?: Subset<T, user$profileArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    donations<T extends user$donationsArgs<ExtArgs> = {}>(
      args?: Subset<T, user$donationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$donationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    received_donations<T extends user$received_donationsArgs<ExtArgs> = {}>(
      args?: Subset<T, user$received_donationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$donationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    overlays<T extends user$overlaysArgs<ExtArgs> = {}>(
      args?: Subset<T, user$overlaysArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$overlayPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    goals<T extends user$goalsArgs<ExtArgs> = {}>(
      args?: Subset<T, user$goalsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$goalPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly username: FieldRef<'user', 'String'>;
    readonly password: FieldRef<'user', 'String'>;
    readonly display_name: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
    readonly deleted_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
  };

  /**
   * user.profile
   */
  export type user$profileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    where?: profileWhereInput;
  };

  /**
   * user.donations
   */
  export type user$donationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    where?: donationWhereInput;
    orderBy?:
      | donationOrderByWithRelationInput
      | donationOrderByWithRelationInput[];
    cursor?: donationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[];
  };

  /**
   * user.received_donations
   */
  export type user$received_donationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    where?: donationWhereInput;
    orderBy?:
      | donationOrderByWithRelationInput
      | donationOrderByWithRelationInput[];
    cursor?: donationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[];
  };

  /**
   * user.overlays
   */
  export type user$overlaysArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    where?: overlayWhereInput;
    orderBy?:
      | overlayOrderByWithRelationInput
      | overlayOrderByWithRelationInput[];
    cursor?: overlayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OverlayScalarFieldEnum | OverlayScalarFieldEnum[];
  };

  /**
   * user.goals
   */
  export type user$goalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    where?: goalWhereInput;
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    cursor?: goalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    bio: string | null;
    xendit_api_key: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type ProfileMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    bio: string | null;
    xendit_api_key: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type ProfileCountAggregateOutputType = {
    id: number;
    user_id: number;
    bio: number;
    xendit_api_key: number;
    notification_settings: number;
    social_links: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type ProfileMinAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    xendit_api_key?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type ProfileMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    xendit_api_key?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type ProfileCountAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    xendit_api_key?: true;
    notification_settings?: true;
    social_links?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?:
      | profileOrderByWithRelationInput
      | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type profileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: profileWhereInput;
    orderBy?:
      | profileOrderByWithAggregationInput
      | profileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: profileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    id: string;
    user_id: string;
    bio: string | null;
    xendit_api_key: string | null;
    notification_settings: JsonValue | null;
    social_links: JsonValue | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends profileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type profileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      bio?: boolean;
      xendit_api_key?: boolean;
      notification_settings?: boolean;
      social_links?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type profileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      bio?: boolean;
      xendit_api_key?: boolean;
      notification_settings?: boolean;
      social_links?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type profileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      bio?: boolean;
      xendit_api_key?: boolean;
      notification_settings?: boolean;
      social_links?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type profileSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    xendit_api_key?: boolean;
    notification_settings?: boolean;
    social_links?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type profileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'bio'
    | 'xendit_api_key'
    | 'notification_settings'
    | 'social_links'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['profile']
  >;
  export type profileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type profileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type profileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $profilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'profile';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        bio: string | null;
        xendit_api_key: string | null;
        notification_settings: Prisma.JsonValue | null;
        social_links: Prisma.JsonValue | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['profile']
    >;
    composites: {};
  };

  type profileGetPayload<
    S extends boolean | null | undefined | profileDefaultArgs,
  > = $Result.GetResult<Prisma.$profilePayload, S>;

  type profileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface profileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['profile'];
      meta: { name: 'profile' };
    };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profileFindUniqueArgs>(
      args: SelectSubset<T, profileFindUniqueArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, profileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profileFindFirstArgs>(
      args?: SelectSubset<T, profileFindFirstArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, profileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends profileFindManyArgs>(
      args?: SelectSubset<T, profileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     */
    create<T extends profileCreateArgs>(
      args: SelectSubset<T, profileCreateArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Profiles.
     * @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends profileCreateManyArgs>(
      args?: SelectSubset<T, profileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends profileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, profileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     */
    delete<T extends profileDeleteArgs>(
      args: SelectSubset<T, profileDeleteArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends profileUpdateArgs>(
      args: SelectSubset<T, profileUpdateArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends profileDeleteManyArgs>(
      args?: SelectSubset<T, profileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends profileUpdateManyArgs>(
      args: SelectSubset<T, profileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends profileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, profileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends profileUpsertArgs>(
      args: SelectSubset<T, profileUpsertArgs<ExtArgs>>,
    ): Prisma__profileClient<
      $Result.GetResult<
        Prisma.$profilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profileGroupByArgs['orderBy'] }
        : { orderBy?: profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, profileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the profile model
     */
    readonly fields: profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the profile model
   */
  interface profileFieldRefs {
    readonly id: FieldRef<'profile', 'String'>;
    readonly user_id: FieldRef<'profile', 'String'>;
    readonly bio: FieldRef<'profile', 'String'>;
    readonly xendit_api_key: FieldRef<'profile', 'String'>;
    readonly notification_settings: FieldRef<'profile', 'Json'>;
    readonly social_links: FieldRef<'profile', 'Json'>;
    readonly created_at: FieldRef<'profile', 'DateTime'>;
    readonly updated_at: FieldRef<'profile', 'DateTime'>;
    readonly deleted_at: FieldRef<'profile', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile findFirst
   */
  export type profileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?:
      | profileOrderByWithRelationInput
      | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?:
      | profileOrderByWithRelationInput
      | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * profile findMany
   */
  export type profileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profiles to fetch.
     */
    orderBy?:
      | profileOrderByWithRelationInput
      | profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * profile create
   */
  export type profileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>;
  };

  /**
   * profile createMany
   */
  export type profileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * profile createManyAndReturn
   */
  export type profileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * profile update
   */
  export type profileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>;
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>;
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput;
    /**
     * Limit how many profiles to update.
     */
    limit?: number;
  };

  /**
   * profile updateManyAndReturn
   */
  export type profileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>;
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput;
    /**
     * Limit how many profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * profile upsert
   */
  export type profileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput;
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>;
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>;
  };

  /**
   * profile delete
   */
  export type profileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput;
  };

  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput;
    /**
     * Limit how many profiles to delete.
     */
    limit?: number;
  };

  /**
   * profile without action
   */
  export type profileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null;
  };

  /**
   * Model donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null;
    _avg: DonationAvgAggregateOutputType | null;
    _sum: DonationSumAggregateOutputType | null;
    _min: DonationMinAggregateOutputType | null;
    _max: DonationMaxAggregateOutputType | null;
  };

  export type DonationAvgAggregateOutputType = {
    amount: Decimal | null;
  };

  export type DonationSumAggregateOutputType = {
    amount: Decimal | null;
  };

  export type DonationMinAggregateOutputType = {
    id: string | null;
    external_id: string | null;
    amount: Decimal | null;
    currency: string | null;
    donor_name: string | null;
    message: string | null;
    status: $Enums.donation_status | null;
    payment_url: string | null;
    payment_method: string | null;
    recipient_id: string | null;
    donor_id: string | null;
    media_type: string | null;
    media_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type DonationMaxAggregateOutputType = {
    id: string | null;
    external_id: string | null;
    amount: Decimal | null;
    currency: string | null;
    donor_name: string | null;
    message: string | null;
    status: $Enums.donation_status | null;
    payment_url: string | null;
    payment_method: string | null;
    recipient_id: string | null;
    donor_id: string | null;
    media_type: string | null;
    media_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type DonationCountAggregateOutputType = {
    id: number;
    external_id: number;
    amount: number;
    currency: number;
    donor_name: number;
    message: number;
    status: number;
    payment_url: number;
    payment_method: number;
    recipient_id: number;
    donor_id: number;
    media_type: number;
    media_url: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type DonationAvgAggregateInputType = {
    amount?: true;
  };

  export type DonationSumAggregateInputType = {
    amount?: true;
  };

  export type DonationMinAggregateInputType = {
    id?: true;
    external_id?: true;
    amount?: true;
    currency?: true;
    donor_name?: true;
    message?: true;
    status?: true;
    payment_url?: true;
    payment_method?: true;
    recipient_id?: true;
    donor_id?: true;
    media_type?: true;
    media_url?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type DonationMaxAggregateInputType = {
    id?: true;
    external_id?: true;
    amount?: true;
    currency?: true;
    donor_name?: true;
    message?: true;
    status?: true;
    payment_url?: true;
    payment_method?: true;
    recipient_id?: true;
    donor_id?: true;
    media_type?: true;
    media_url?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type DonationCountAggregateInputType = {
    id?: true;
    external_id?: true;
    amount?: true;
    currency?: true;
    donor_name?: true;
    message?: true;
    status?: true;
    payment_url?: true;
    payment_method?: true;
    recipient_id?: true;
    donor_id?: true;
    media_type?: true;
    media_url?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type DonationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which donation to aggregate.
     */
    where?: donationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donations to fetch.
     */
    orderBy?:
      | donationOrderByWithRelationInput
      | donationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: donationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned donations
     **/
    _count?: true | DonationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DonationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DonationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DonationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DonationMaxAggregateInputType;
  };

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
    [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>;
  };

  export type donationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: donationWhereInput;
    orderBy?:
      | donationOrderByWithAggregationInput
      | donationOrderByWithAggregationInput[];
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum;
    having?: donationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DonationCountAggregateInputType | true;
    _avg?: DonationAvgAggregateInputType;
    _sum?: DonationSumAggregateInputType;
    _min?: DonationMinAggregateInputType;
    _max?: DonationMaxAggregateInputType;
  };

  export type DonationGroupByOutputType = {
    id: string;
    external_id: string;
    amount: Decimal;
    currency: string;
    donor_name: string;
    message: string | null;
    status: $Enums.donation_status;
    payment_url: string | null;
    payment_method: string | null;
    recipient_id: string;
    donor_id: string | null;
    media_type: string | null;
    media_url: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: DonationCountAggregateOutputType | null;
    _avg: DonationAvgAggregateOutputType | null;
    _sum: DonationSumAggregateOutputType | null;
    _min: DonationMinAggregateOutputType | null;
    _max: DonationMaxAggregateOutputType | null;
  };

  type GetDonationGroupByPayload<T extends donationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DonationGroupByOutputType, T['by']> & {
          [P in keyof T & keyof DonationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>;
        }
      >
    >;

  export type donationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      external_id?: boolean;
      amount?: boolean;
      currency?: boolean;
      donor_name?: boolean;
      message?: boolean;
      status?: boolean;
      payment_url?: boolean;
      payment_method?: boolean;
      recipient_id?: boolean;
      donor_id?: boolean;
      media_type?: boolean;
      media_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      recipient?: boolean | userDefaultArgs<ExtArgs>;
      donor?: boolean | donation$donorArgs<ExtArgs>;
      transactions?: boolean | donation$transactionsArgs<ExtArgs>;
      _count?: boolean | DonationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['donation']
  >;

  export type donationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      external_id?: boolean;
      amount?: boolean;
      currency?: boolean;
      donor_name?: boolean;
      message?: boolean;
      status?: boolean;
      payment_url?: boolean;
      payment_method?: boolean;
      recipient_id?: boolean;
      donor_id?: boolean;
      media_type?: boolean;
      media_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      recipient?: boolean | userDefaultArgs<ExtArgs>;
      donor?: boolean | donation$donorArgs<ExtArgs>;
    },
    ExtArgs['result']['donation']
  >;

  export type donationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      external_id?: boolean;
      amount?: boolean;
      currency?: boolean;
      donor_name?: boolean;
      message?: boolean;
      status?: boolean;
      payment_url?: boolean;
      payment_method?: boolean;
      recipient_id?: boolean;
      donor_id?: boolean;
      media_type?: boolean;
      media_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      recipient?: boolean | userDefaultArgs<ExtArgs>;
      donor?: boolean | donation$donorArgs<ExtArgs>;
    },
    ExtArgs['result']['donation']
  >;

  export type donationSelectScalar = {
    id?: boolean;
    external_id?: boolean;
    amount?: boolean;
    currency?: boolean;
    donor_name?: boolean;
    message?: boolean;
    status?: boolean;
    payment_url?: boolean;
    payment_method?: boolean;
    recipient_id?: boolean;
    donor_id?: boolean;
    media_type?: boolean;
    media_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type donationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'external_id'
    | 'amount'
    | 'currency'
    | 'donor_name'
    | 'message'
    | 'status'
    | 'payment_url'
    | 'payment_method'
    | 'recipient_id'
    | 'donor_id'
    | 'media_type'
    | 'media_url'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['donation']
  >;
  export type donationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recipient?: boolean | userDefaultArgs<ExtArgs>;
    donor?: boolean | donation$donorArgs<ExtArgs>;
    transactions?: boolean | donation$transactionsArgs<ExtArgs>;
    _count?: boolean | DonationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type donationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recipient?: boolean | userDefaultArgs<ExtArgs>;
    donor?: boolean | donation$donorArgs<ExtArgs>;
  };
  export type donationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    recipient?: boolean | userDefaultArgs<ExtArgs>;
    donor?: boolean | donation$donorArgs<ExtArgs>;
  };

  export type $donationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'donation';
    objects: {
      recipient: Prisma.$userPayload<ExtArgs>;
      donor: Prisma.$userPayload<ExtArgs> | null;
      transactions: Prisma.$transactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        external_id: string;
        amount: Prisma.Decimal;
        currency: string;
        donor_name: string;
        message: string | null;
        status: $Enums.donation_status;
        payment_url: string | null;
        payment_method: string | null;
        recipient_id: string;
        donor_id: string | null;
        media_type: string | null;
        media_url: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['donation']
    >;
    composites: {};
  };

  type donationGetPayload<
    S extends boolean | null | undefined | donationDefaultArgs,
  > = $Result.GetResult<Prisma.$donationPayload, S>;

  type donationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<donationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DonationCountAggregateInputType | true;
  };

  export interface donationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['donation'];
      meta: { name: 'donation' };
    };
    /**
     * Find zero or one Donation that matches the filter.
     * @param {donationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends donationFindUniqueArgs>(
      args: SelectSubset<T, donationFindUniqueArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {donationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends donationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, donationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends donationFindFirstArgs>(
      args?: SelectSubset<T, donationFindFirstArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends donationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, donationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     *
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends donationFindManyArgs>(
      args?: SelectSubset<T, donationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Donation.
     * @param {donationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     *
     */
    create<T extends donationCreateArgs>(
      args: SelectSubset<T, donationCreateArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Donations.
     * @param {donationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends donationCreateManyArgs>(
      args?: SelectSubset<T, donationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {donationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends donationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, donationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Donation.
     * @param {donationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     *
     */
    delete<T extends donationDeleteArgs>(
      args: SelectSubset<T, donationDeleteArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Donation.
     * @param {donationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends donationUpdateArgs>(
      args: SelectSubset<T, donationUpdateArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Donations.
     * @param {donationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends donationDeleteManyArgs>(
      args?: SelectSubset<T, donationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends donationUpdateManyArgs>(
      args: SelectSubset<T, donationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {donationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends donationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, donationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Donation.
     * @param {donationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends donationUpsertArgs>(
      args: SelectSubset<T, donationUpsertArgs<ExtArgs>>,
    ): Prisma__donationClient<
      $Result.GetResult<
        Prisma.$donationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
     **/
    count<T extends donationCountArgs>(
      args?: Subset<T, donationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DonationAggregateArgs>(
      args: Subset<T, DonationAggregateArgs>,
    ): Prisma.PrismaPromise<GetDonationAggregateType<T>>;

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends donationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donationGroupByArgs['orderBy'] }
        : { orderBy?: donationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, donationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetDonationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the donation model
     */
    readonly fields: donationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    recipient<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    donor<T extends donation$donorArgs<ExtArgs> = {}>(
      args?: Subset<T, donation$donorArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<
        Prisma.$userPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    transactions<T extends donation$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, donation$transactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$transactionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the donation model
   */
  interface donationFieldRefs {
    readonly id: FieldRef<'donation', 'String'>;
    readonly external_id: FieldRef<'donation', 'String'>;
    readonly amount: FieldRef<'donation', 'Decimal'>;
    readonly currency: FieldRef<'donation', 'String'>;
    readonly donor_name: FieldRef<'donation', 'String'>;
    readonly message: FieldRef<'donation', 'String'>;
    readonly status: FieldRef<'donation', 'donation_status'>;
    readonly payment_url: FieldRef<'donation', 'String'>;
    readonly payment_method: FieldRef<'donation', 'String'>;
    readonly recipient_id: FieldRef<'donation', 'String'>;
    readonly donor_id: FieldRef<'donation', 'String'>;
    readonly media_type: FieldRef<'donation', 'String'>;
    readonly media_url: FieldRef<'donation', 'String'>;
    readonly created_at: FieldRef<'donation', 'DateTime'>;
    readonly updated_at: FieldRef<'donation', 'DateTime'>;
    readonly deleted_at: FieldRef<'donation', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * donation findUnique
   */
  export type donationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * Filter, which donation to fetch.
     */
    where: donationWhereUniqueInput;
  };

  /**
   * donation findUniqueOrThrow
   */
  export type donationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * Filter, which donation to fetch.
     */
    where: donationWhereUniqueInput;
  };

  /**
   * donation findFirst
   */
  export type donationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * Filter, which donation to fetch.
     */
    where?: donationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donations to fetch.
     */
    orderBy?:
      | donationOrderByWithRelationInput
      | donationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for donations.
     */
    cursor?: donationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[];
  };

  /**
   * donation findFirstOrThrow
   */
  export type donationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * Filter, which donation to fetch.
     */
    where?: donationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donations to fetch.
     */
    orderBy?:
      | donationOrderByWithRelationInput
      | donationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for donations.
     */
    cursor?: donationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[];
  };

  /**
   * donation findMany
   */
  export type donationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * Filter, which donations to fetch.
     */
    where?: donationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donations to fetch.
     */
    orderBy?:
      | donationOrderByWithRelationInput
      | donationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing donations.
     */
    cursor?: donationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donations.
     */
    skip?: number;
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[];
  };

  /**
   * donation create
   */
  export type donationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * The data needed to create a donation.
     */
    data: XOR<donationCreateInput, donationUncheckedCreateInput>;
  };

  /**
   * donation createMany
   */
  export type donationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many donations.
     */
    data: donationCreateManyInput | donationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * donation createManyAndReturn
   */
  export type donationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * The data used to create many donations.
     */
    data: donationCreateManyInput | donationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * donation update
   */
  export type donationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * The data needed to update a donation.
     */
    data: XOR<donationUpdateInput, donationUncheckedUpdateInput>;
    /**
     * Choose, which donation to update.
     */
    where: donationWhereUniqueInput;
  };

  /**
   * donation updateMany
   */
  export type donationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update donations.
     */
    data: XOR<
      donationUpdateManyMutationInput,
      donationUncheckedUpdateManyInput
    >;
    /**
     * Filter which donations to update
     */
    where?: donationWhereInput;
    /**
     * Limit how many donations to update.
     */
    limit?: number;
  };

  /**
   * donation updateManyAndReturn
   */
  export type donationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * The data used to update donations.
     */
    data: XOR<
      donationUpdateManyMutationInput,
      donationUncheckedUpdateManyInput
    >;
    /**
     * Filter which donations to update
     */
    where?: donationWhereInput;
    /**
     * Limit how many donations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * donation upsert
   */
  export type donationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * The filter to search for the donation to update in case it exists.
     */
    where: donationWhereUniqueInput;
    /**
     * In case the donation found by the `where` argument doesn't exist, create a new donation with this data.
     */
    create: XOR<donationCreateInput, donationUncheckedCreateInput>;
    /**
     * In case the donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donationUpdateInput, donationUncheckedUpdateInput>;
  };

  /**
   * donation delete
   */
  export type donationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
    /**
     * Filter which donation to delete.
     */
    where: donationWhereUniqueInput;
  };

  /**
   * donation deleteMany
   */
  export type donationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which donations to delete
     */
    where?: donationWhereInput;
    /**
     * Limit how many donations to delete.
     */
    limit?: number;
  };

  /**
   * donation.donor
   */
  export type donation$donorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
  };

  /**
   * donation.transactions
   */
  export type donation$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    where?: transactionWhereInput;
    orderBy?:
      | transactionOrderByWithRelationInput
      | transactionOrderByWithRelationInput[];
    cursor?: transactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * donation without action
   */
  export type donationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null;
  };

  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null;
  };

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null;
  };

  export type TransactionMinAggregateOutputType = {
    id: string | null;
    donation_id: string | null;
    amount: Decimal | null;
    currency: string | null;
    status: $Enums.transaction_status | null;
    reference_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type TransactionMaxAggregateOutputType = {
    id: string | null;
    donation_id: string | null;
    amount: Decimal | null;
    currency: string | null;
    status: $Enums.transaction_status | null;
    reference_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type TransactionCountAggregateOutputType = {
    id: number;
    donation_id: number;
    amount: number;
    currency: number;
    status: number;
    reference_id: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type TransactionAvgAggregateInputType = {
    amount?: true;
  };

  export type TransactionSumAggregateInputType = {
    amount?: true;
  };

  export type TransactionMinAggregateInputType = {
    id?: true;
    donation_id?: true;
    amount?: true;
    currency?: true;
    status?: true;
    reference_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type TransactionMaxAggregateInputType = {
    id?: true;
    donation_id?: true;
    amount?: true;
    currency?: true;
    status?: true;
    reference_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type TransactionCountAggregateInputType = {
    id?: true;
    donation_id?: true;
    amount?: true;
    currency?: true;
    status?: true;
    reference_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type TransactionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionOrderByWithRelationInput
      | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transactions
     **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionMaxAggregateInputType;
  };

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> =
    {
      [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateTransaction[P]>
        : GetScalarType<T[P], AggregateTransaction[P]>;
    };

  export type transactionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionWhereInput;
    orderBy?:
      | transactionOrderByWithAggregationInput
      | transactionOrderByWithAggregationInput[];
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
    having?: transactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
  };

  export type TransactionGroupByOutputType = {
    id: string;
    donation_id: string;
    amount: Decimal;
    currency: string;
    status: $Enums.transaction_status;
    reference_id: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof TransactionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>;
        }
      >
    >;

  export type transactionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      donation_id?: boolean;
      amount?: boolean;
      currency?: boolean;
      status?: boolean;
      reference_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      donation?: boolean | donationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type transactionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      donation_id?: boolean;
      amount?: boolean;
      currency?: boolean;
      status?: boolean;
      reference_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      donation?: boolean | donationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type transactionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      donation_id?: boolean;
      amount?: boolean;
      currency?: boolean;
      status?: boolean;
      reference_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      donation?: boolean | donationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type transactionSelectScalar = {
    id?: boolean;
    donation_id?: boolean;
    amount?: boolean;
    currency?: boolean;
    status?: boolean;
    reference_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type transactionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'donation_id'
    | 'amount'
    | 'currency'
    | 'status'
    | 'reference_id'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['transaction']
  >;
  export type transactionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    donation?: boolean | donationDefaultArgs<ExtArgs>;
  };
  export type transactionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    donation?: boolean | donationDefaultArgs<ExtArgs>;
  };
  export type transactionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    donation?: boolean | donationDefaultArgs<ExtArgs>;
  };

  export type $transactionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'transaction';
    objects: {
      donation: Prisma.$donationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        donation_id: string;
        amount: Prisma.Decimal;
        currency: string;
        status: $Enums.transaction_status;
        reference_id: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['transaction']
    >;
    composites: {};
  };

  type transactionGetPayload<
    S extends boolean | null | undefined | transactionDefaultArgs,
  > = $Result.GetResult<Prisma.$transactionPayload, S>;

  type transactionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    transactionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TransactionCountAggregateInputType | true;
  };

  export interface transactionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['transaction'];
      meta: { name: 'transaction' };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(
      args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(
      args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends transactionFindManyArgs>(
      args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends transactionCreateArgs>(
      args: SelectSubset<T, transactionCreateArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends transactionCreateManyArgs>(
      args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends transactionDeleteArgs>(
      args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends transactionUpdateArgs>(
      args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends transactionDeleteManyArgs>(
      args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends transactionUpdateManyArgs>(
      args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(
      args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<
        Prisma.$transactionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
     **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TransactionAggregateArgs>(
      args: Subset<T, TransactionAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the transaction model
     */
    readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    donation<T extends donationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, donationDefaultArgs<ExtArgs>>,
    ): Prisma__donationClient<
      | $Result.GetResult<
          Prisma.$donationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<'transaction', 'String'>;
    readonly donation_id: FieldRef<'transaction', 'String'>;
    readonly amount: FieldRef<'transaction', 'Decimal'>;
    readonly currency: FieldRef<'transaction', 'String'>;
    readonly status: FieldRef<'transaction', 'transaction_status'>;
    readonly reference_id: FieldRef<'transaction', 'String'>;
    readonly created_at: FieldRef<'transaction', 'DateTime'>;
    readonly updated_at: FieldRef<'transaction', 'DateTime'>;
    readonly deleted_at: FieldRef<'transaction', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionOrderByWithRelationInput
      | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionOrderByWithRelationInput
      | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionOrderByWithRelationInput
      | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * transaction create
   */
  export type transactionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>;
  };

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * transaction update
   */
  export type transactionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>;
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update transactions.
     */
    data: XOR<
      transactionUpdateManyMutationInput,
      transactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
  };

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * The data used to update transactions.
     */
    data: XOR<
      transactionUpdateManyMutationInput,
      transactionUncheckedUpdateManyInput
    >;
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput;
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>;
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>;
  };

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput;
    /**
     * Limit how many transactions to delete.
     */
    limit?: number;
  };

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null;
  };

  /**
   * Model overlay
   */

  export type AggregateOverlay = {
    _count: OverlayCountAggregateOutputType | null;
    _min: OverlayMinAggregateOutputType | null;
    _max: OverlayMaxAggregateOutputType | null;
  };

  export type OverlayMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    type: $Enums.overlay_type | null;
    name: string | null;
    token: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type OverlayMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    type: $Enums.overlay_type | null;
    name: string | null;
    token: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type OverlayCountAggregateOutputType = {
    id: number;
    user_id: number;
    type: number;
    name: number;
    config: number;
    token: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type OverlayMinAggregateInputType = {
    id?: true;
    user_id?: true;
    type?: true;
    name?: true;
    token?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type OverlayMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    type?: true;
    name?: true;
    token?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type OverlayCountAggregateInputType = {
    id?: true;
    user_id?: true;
    type?: true;
    name?: true;
    config?: true;
    token?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type OverlayAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which overlay to aggregate.
     */
    where?: overlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of overlays to fetch.
     */
    orderBy?:
      | overlayOrderByWithRelationInput
      | overlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: overlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` overlays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` overlays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned overlays
     **/
    _count?: true | OverlayCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OverlayMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OverlayMaxAggregateInputType;
  };

  export type GetOverlayAggregateType<T extends OverlayAggregateArgs> = {
    [P in keyof T & keyof AggregateOverlay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOverlay[P]>
      : GetScalarType<T[P], AggregateOverlay[P]>;
  };

  export type overlayGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: overlayWhereInput;
    orderBy?:
      | overlayOrderByWithAggregationInput
      | overlayOrderByWithAggregationInput[];
    by: OverlayScalarFieldEnum[] | OverlayScalarFieldEnum;
    having?: overlayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OverlayCountAggregateInputType | true;
    _min?: OverlayMinAggregateInputType;
    _max?: OverlayMaxAggregateInputType;
  };

  export type OverlayGroupByOutputType = {
    id: string;
    user_id: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonValue;
    token: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: OverlayCountAggregateOutputType | null;
    _min: OverlayMinAggregateOutputType | null;
    _max: OverlayMaxAggregateOutputType | null;
  };

  type GetOverlayGroupByPayload<T extends overlayGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OverlayGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OverlayGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OverlayGroupByOutputType[P]>
            : GetScalarType<T[P], OverlayGroupByOutputType[P]>;
        }
      >
    >;

  export type overlaySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      type?: boolean;
      name?: boolean;
      config?: boolean;
      token?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['overlay']
  >;

  export type overlaySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      type?: boolean;
      name?: boolean;
      config?: boolean;
      token?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['overlay']
  >;

  export type overlaySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      type?: boolean;
      name?: boolean;
      config?: boolean;
      token?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['overlay']
  >;

  export type overlaySelectScalar = {
    id?: boolean;
    user_id?: boolean;
    type?: boolean;
    name?: boolean;
    config?: boolean;
    token?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type overlayOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'type'
    | 'name'
    | 'config'
    | 'token'
    | 'is_active'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['overlay']
  >;
  export type overlayInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type overlayIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type overlayIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $overlayPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'overlay';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        type: $Enums.overlay_type;
        name: string;
        config: Prisma.JsonValue;
        token: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['overlay']
    >;
    composites: {};
  };

  type overlayGetPayload<
    S extends boolean | null | undefined | overlayDefaultArgs,
  > = $Result.GetResult<Prisma.$overlayPayload, S>;

  type overlayCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<overlayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OverlayCountAggregateInputType | true;
  };

  export interface overlayDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['overlay'];
      meta: { name: 'overlay' };
    };
    /**
     * Find zero or one Overlay that matches the filter.
     * @param {overlayFindUniqueArgs} args - Arguments to find a Overlay
     * @example
     * // Get one Overlay
     * const overlay = await prisma.overlay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends overlayFindUniqueArgs>(
      args: SelectSubset<T, overlayFindUniqueArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Overlay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {overlayFindUniqueOrThrowArgs} args - Arguments to find a Overlay
     * @example
     * // Get one Overlay
     * const overlay = await prisma.overlay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends overlayFindUniqueOrThrowArgs>(
      args: SelectSubset<T, overlayFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Overlay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overlayFindFirstArgs} args - Arguments to find a Overlay
     * @example
     * // Get one Overlay
     * const overlay = await prisma.overlay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends overlayFindFirstArgs>(
      args?: SelectSubset<T, overlayFindFirstArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Overlay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overlayFindFirstOrThrowArgs} args - Arguments to find a Overlay
     * @example
     * // Get one Overlay
     * const overlay = await prisma.overlay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends overlayFindFirstOrThrowArgs>(
      args?: SelectSubset<T, overlayFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Overlays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overlayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Overlays
     * const overlays = await prisma.overlay.findMany()
     *
     * // Get first 10 Overlays
     * const overlays = await prisma.overlay.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const overlayWithIdOnly = await prisma.overlay.findMany({ select: { id: true } })
     *
     */
    findMany<T extends overlayFindManyArgs>(
      args?: SelectSubset<T, overlayFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Overlay.
     * @param {overlayCreateArgs} args - Arguments to create a Overlay.
     * @example
     * // Create one Overlay
     * const Overlay = await prisma.overlay.create({
     *   data: {
     *     // ... data to create a Overlay
     *   }
     * })
     *
     */
    create<T extends overlayCreateArgs>(
      args: SelectSubset<T, overlayCreateArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Overlays.
     * @param {overlayCreateManyArgs} args - Arguments to create many Overlays.
     * @example
     * // Create many Overlays
     * const overlay = await prisma.overlay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends overlayCreateManyArgs>(
      args?: SelectSubset<T, overlayCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Overlays and returns the data saved in the database.
     * @param {overlayCreateManyAndReturnArgs} args - Arguments to create many Overlays.
     * @example
     * // Create many Overlays
     * const overlay = await prisma.overlay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Overlays and only return the `id`
     * const overlayWithIdOnly = await prisma.overlay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends overlayCreateManyAndReturnArgs>(
      args?: SelectSubset<T, overlayCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Overlay.
     * @param {overlayDeleteArgs} args - Arguments to delete one Overlay.
     * @example
     * // Delete one Overlay
     * const Overlay = await prisma.overlay.delete({
     *   where: {
     *     // ... filter to delete one Overlay
     *   }
     * })
     *
     */
    delete<T extends overlayDeleteArgs>(
      args: SelectSubset<T, overlayDeleteArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Overlay.
     * @param {overlayUpdateArgs} args - Arguments to update one Overlay.
     * @example
     * // Update one Overlay
     * const overlay = await prisma.overlay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends overlayUpdateArgs>(
      args: SelectSubset<T, overlayUpdateArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Overlays.
     * @param {overlayDeleteManyArgs} args - Arguments to filter Overlays to delete.
     * @example
     * // Delete a few Overlays
     * const { count } = await prisma.overlay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends overlayDeleteManyArgs>(
      args?: SelectSubset<T, overlayDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Overlays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overlayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Overlays
     * const overlay = await prisma.overlay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends overlayUpdateManyArgs>(
      args: SelectSubset<T, overlayUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Overlays and returns the data updated in the database.
     * @param {overlayUpdateManyAndReturnArgs} args - Arguments to update many Overlays.
     * @example
     * // Update many Overlays
     * const overlay = await prisma.overlay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Overlays and only return the `id`
     * const overlayWithIdOnly = await prisma.overlay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends overlayUpdateManyAndReturnArgs>(
      args: SelectSubset<T, overlayUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Overlay.
     * @param {overlayUpsertArgs} args - Arguments to update or create a Overlay.
     * @example
     * // Update or create a Overlay
     * const overlay = await prisma.overlay.upsert({
     *   create: {
     *     // ... data to create a Overlay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Overlay we want to update
     *   }
     * })
     */
    upsert<T extends overlayUpsertArgs>(
      args: SelectSubset<T, overlayUpsertArgs<ExtArgs>>,
    ): Prisma__overlayClient<
      $Result.GetResult<
        Prisma.$overlayPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Overlays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overlayCountArgs} args - Arguments to filter Overlays to count.
     * @example
     * // Count the number of Overlays
     * const count = await prisma.overlay.count({
     *   where: {
     *     // ... the filter for the Overlays we want to count
     *   }
     * })
     **/
    count<T extends overlayCountArgs>(
      args?: Subset<T, overlayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OverlayCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Overlay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OverlayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OverlayAggregateArgs>(
      args: Subset<T, OverlayAggregateArgs>,
    ): Prisma.PrismaPromise<GetOverlayAggregateType<T>>;

    /**
     * Group by Overlay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {overlayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends overlayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: overlayGroupByArgs['orderBy'] }
        : { orderBy?: overlayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, overlayGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOverlayGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the overlay model
     */
    readonly fields: overlayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for overlay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__overlayClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the overlay model
   */
  interface overlayFieldRefs {
    readonly id: FieldRef<'overlay', 'String'>;
    readonly user_id: FieldRef<'overlay', 'String'>;
    readonly type: FieldRef<'overlay', 'overlay_type'>;
    readonly name: FieldRef<'overlay', 'String'>;
    readonly config: FieldRef<'overlay', 'Json'>;
    readonly token: FieldRef<'overlay', 'String'>;
    readonly is_active: FieldRef<'overlay', 'Boolean'>;
    readonly created_at: FieldRef<'overlay', 'DateTime'>;
    readonly updated_at: FieldRef<'overlay', 'DateTime'>;
    readonly deleted_at: FieldRef<'overlay', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * overlay findUnique
   */
  export type overlayFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * Filter, which overlay to fetch.
     */
    where: overlayWhereUniqueInput;
  };

  /**
   * overlay findUniqueOrThrow
   */
  export type overlayFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * Filter, which overlay to fetch.
     */
    where: overlayWhereUniqueInput;
  };

  /**
   * overlay findFirst
   */
  export type overlayFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * Filter, which overlay to fetch.
     */
    where?: overlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of overlays to fetch.
     */
    orderBy?:
      | overlayOrderByWithRelationInput
      | overlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for overlays.
     */
    cursor?: overlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` overlays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` overlays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of overlays.
     */
    distinct?: OverlayScalarFieldEnum | OverlayScalarFieldEnum[];
  };

  /**
   * overlay findFirstOrThrow
   */
  export type overlayFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * Filter, which overlay to fetch.
     */
    where?: overlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of overlays to fetch.
     */
    orderBy?:
      | overlayOrderByWithRelationInput
      | overlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for overlays.
     */
    cursor?: overlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` overlays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` overlays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of overlays.
     */
    distinct?: OverlayScalarFieldEnum | OverlayScalarFieldEnum[];
  };

  /**
   * overlay findMany
   */
  export type overlayFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * Filter, which overlays to fetch.
     */
    where?: overlayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of overlays to fetch.
     */
    orderBy?:
      | overlayOrderByWithRelationInput
      | overlayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing overlays.
     */
    cursor?: overlayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` overlays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` overlays.
     */
    skip?: number;
    distinct?: OverlayScalarFieldEnum | OverlayScalarFieldEnum[];
  };

  /**
   * overlay create
   */
  export type overlayCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * The data needed to create a overlay.
     */
    data: XOR<overlayCreateInput, overlayUncheckedCreateInput>;
  };

  /**
   * overlay createMany
   */
  export type overlayCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many overlays.
     */
    data: overlayCreateManyInput | overlayCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * overlay createManyAndReturn
   */
  export type overlayCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * The data used to create many overlays.
     */
    data: overlayCreateManyInput | overlayCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * overlay update
   */
  export type overlayUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * The data needed to update a overlay.
     */
    data: XOR<overlayUpdateInput, overlayUncheckedUpdateInput>;
    /**
     * Choose, which overlay to update.
     */
    where: overlayWhereUniqueInput;
  };

  /**
   * overlay updateMany
   */
  export type overlayUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update overlays.
     */
    data: XOR<overlayUpdateManyMutationInput, overlayUncheckedUpdateManyInput>;
    /**
     * Filter which overlays to update
     */
    where?: overlayWhereInput;
    /**
     * Limit how many overlays to update.
     */
    limit?: number;
  };

  /**
   * overlay updateManyAndReturn
   */
  export type overlayUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * The data used to update overlays.
     */
    data: XOR<overlayUpdateManyMutationInput, overlayUncheckedUpdateManyInput>;
    /**
     * Filter which overlays to update
     */
    where?: overlayWhereInput;
    /**
     * Limit how many overlays to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * overlay upsert
   */
  export type overlayUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * The filter to search for the overlay to update in case it exists.
     */
    where: overlayWhereUniqueInput;
    /**
     * In case the overlay found by the `where` argument doesn't exist, create a new overlay with this data.
     */
    create: XOR<overlayCreateInput, overlayUncheckedCreateInput>;
    /**
     * In case the overlay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<overlayUpdateInput, overlayUncheckedUpdateInput>;
  };

  /**
   * overlay delete
   */
  export type overlayDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
    /**
     * Filter which overlay to delete.
     */
    where: overlayWhereUniqueInput;
  };

  /**
   * overlay deleteMany
   */
  export type overlayDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which overlays to delete
     */
    where?: overlayWhereInput;
    /**
     * Limit how many overlays to delete.
     */
    limit?: number;
  };

  /**
   * overlay without action
   */
  export type overlayDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the overlay
     */
    select?: overlaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the overlay
     */
    omit?: overlayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: overlayInclude<ExtArgs> | null;
  };

  /**
   * Model goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
  };

  export type GoalAvgAggregateOutputType = {
    target_amount: Decimal | null;
    current_amount: Decimal | null;
  };

  export type GoalSumAggregateOutputType = {
    target_amount: Decimal | null;
    current_amount: Decimal | null;
  };

  export type GoalMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    title: string | null;
    target_amount: Decimal | null;
    current_amount: Decimal | null;
    start_date: Date | null;
    end_date: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type GoalMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    title: string | null;
    target_amount: Decimal | null;
    current_amount: Decimal | null;
    start_date: Date | null;
    end_date: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type GoalCountAggregateOutputType = {
    id: number;
    user_id: number;
    title: number;
    target_amount: number;
    current_amount: number;
    start_date: number;
    end_date: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type GoalAvgAggregateInputType = {
    target_amount?: true;
    current_amount?: true;
  };

  export type GoalSumAggregateInputType = {
    target_amount?: true;
    current_amount?: true;
  };

  export type GoalMinAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    target_amount?: true;
    current_amount?: true;
    start_date?: true;
    end_date?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type GoalMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    target_amount?: true;
    current_amount?: true;
    start_date?: true;
    end_date?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type GoalCountAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    target_amount?: true;
    current_amount?: true;
    start_date?: true;
    end_date?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type GoalAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which goal to aggregate.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned goals
     **/
    _count?: true | GoalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GoalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GoalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GoalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GoalMaxAggregateInputType;
  };

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
    [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>;
  };

  export type goalGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: goalWhereInput;
    orderBy?:
      | goalOrderByWithAggregationInput
      | goalOrderByWithAggregationInput[];
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum;
    having?: goalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalCountAggregateInputType | true;
    _avg?: GoalAvgAggregateInputType;
    _sum?: GoalSumAggregateInputType;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
  };

  export type GoalGroupByOutputType = {
    id: string;
    user_id: string;
    title: string;
    target_amount: Decimal;
    current_amount: Decimal;
    start_date: Date;
    end_date: Date | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
  };

  type GetGoalGroupByPayload<T extends goalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GoalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
          : GetScalarType<T[P], GoalGroupByOutputType[P]>;
      }
    >
  >;

  export type goalSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      title?: boolean;
      target_amount?: boolean;
      current_amount?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type goalSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      title?: boolean;
      target_amount?: boolean;
      current_amount?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type goalSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      title?: boolean;
      target_amount?: boolean;
      current_amount?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type goalSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    title?: boolean;
    target_amount?: boolean;
    current_amount?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type goalOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'title'
    | 'target_amount'
    | 'current_amount'
    | 'start_date'
    | 'end_date'
    | 'is_active'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['goal']
  >;
  export type goalInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type goalIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };
  export type goalIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $goalPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'goal';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        title: string;
        target_amount: Prisma.Decimal;
        current_amount: Prisma.Decimal;
        start_date: Date;
        end_date: Date | null;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['goal']
    >;
    composites: {};
  };

  type goalGetPayload<S extends boolean | null | undefined | goalDefaultArgs> =
    $Result.GetResult<Prisma.$goalPayload, S>;

  type goalCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<goalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoalCountAggregateInputType | true;
  };

  export interface goalDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['goal'];
      meta: { name: 'goal' };
    };
    /**
     * Find zero or one Goal that matches the filter.
     * @param {goalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goalFindUniqueArgs>(
      args: SelectSubset<T, goalFindUniqueArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goalFindUniqueOrThrowArgs>(
      args: SelectSubset<T, goalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goalFindFirstArgs>(
      args?: SelectSubset<T, goalFindFirstArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, goalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     *
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     *
     */
    findMany<T extends goalFindManyArgs>(
      args?: SelectSubset<T, goalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Goal.
     * @param {goalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     *
     */
    create<T extends goalCreateArgs>(
      args: SelectSubset<T, goalCreateArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Goals.
     * @param {goalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends goalCreateManyArgs>(
      args?: SelectSubset<T, goalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {goalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends goalCreateManyAndReturnArgs>(
      args?: SelectSubset<T, goalCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Goal.
     * @param {goalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     *
     */
    delete<T extends goalDeleteArgs>(
      args: SelectSubset<T, goalDeleteArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Goal.
     * @param {goalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends goalUpdateArgs>(
      args: SelectSubset<T, goalUpdateArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Goals.
     * @param {goalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends goalDeleteManyArgs>(
      args?: SelectSubset<T, goalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends goalUpdateManyArgs>(
      args: SelectSubset<T, goalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {goalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends goalUpdateManyAndReturnArgs>(
      args: SelectSubset<T, goalUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Goal.
     * @param {goalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends goalUpsertArgs>(
      args: SelectSubset<T, goalUpsertArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<
        Prisma.$goalPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
     **/
    count<T extends goalCountArgs>(
      args?: Subset<T, goalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GoalAggregateArgs>(
      args: Subset<T, GoalAggregateArgs>,
    ): Prisma.PrismaPromise<GetGoalAggregateType<T>>;

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends goalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goalGroupByArgs['orderBy'] }
        : { orderBy?: goalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, goalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetGoalGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the goal model
     */
    readonly fields: goalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      | $Result.GetResult<
          Prisma.$userPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the goal model
   */
  interface goalFieldRefs {
    readonly id: FieldRef<'goal', 'String'>;
    readonly user_id: FieldRef<'goal', 'String'>;
    readonly title: FieldRef<'goal', 'String'>;
    readonly target_amount: FieldRef<'goal', 'Decimal'>;
    readonly current_amount: FieldRef<'goal', 'Decimal'>;
    readonly start_date: FieldRef<'goal', 'DateTime'>;
    readonly end_date: FieldRef<'goal', 'DateTime'>;
    readonly is_active: FieldRef<'goal', 'Boolean'>;
    readonly created_at: FieldRef<'goal', 'DateTime'>;
    readonly updated_at: FieldRef<'goal', 'DateTime'>;
    readonly deleted_at: FieldRef<'goal', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * goal findUnique
   */
  export type goalFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal findUniqueOrThrow
   */
  export type goalFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal findFirst
   */
  export type goalFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * goal findFirstOrThrow
   */
  export type goalFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * goal findMany
   */
  export type goalFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing goals.
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * goal create
   */
  export type goalCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * The data needed to create a goal.
     */
    data: XOR<goalCreateInput, goalUncheckedCreateInput>;
  };

  /**
   * goal createMany
   */
  export type goalCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many goals.
     */
    data: goalCreateManyInput | goalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * goal createManyAndReturn
   */
  export type goalCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * The data used to create many goals.
     */
    data: goalCreateManyInput | goalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * goal update
   */
  export type goalUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * The data needed to update a goal.
     */
    data: XOR<goalUpdateInput, goalUncheckedUpdateInput>;
    /**
     * Choose, which goal to update.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal updateMany
   */
  export type goalUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update goals.
     */
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyInput>;
    /**
     * Filter which goals to update
     */
    where?: goalWhereInput;
    /**
     * Limit how many goals to update.
     */
    limit?: number;
  };

  /**
   * goal updateManyAndReturn
   */
  export type goalUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * The data used to update goals.
     */
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyInput>;
    /**
     * Filter which goals to update
     */
    where?: goalWhereInput;
    /**
     * Limit how many goals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * goal upsert
   */
  export type goalUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * The filter to search for the goal to update in case it exists.
     */
    where: goalWhereUniqueInput;
    /**
     * In case the goal found by the `where` argument doesn't exist, create a new goal with this data.
     */
    create: XOR<goalCreateInput, goalUncheckedCreateInput>;
    /**
     * In case the goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goalUpdateInput, goalUncheckedUpdateInput>;
  };

  /**
   * goal delete
   */
  export type goalDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter which goal to delete.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal deleteMany
   */
  export type goalDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which goals to delete
     */
    where?: goalWhereInput;
    /**
     * Limit how many goals to delete.
     */
    limit?: number;
  };

  /**
   * goal without action
   */
  export type goalDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goal
     */
    omit?: goalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalInclude<ExtArgs> | null;
  };

  /**
   * Model api_queue
   */

  export type AggregateApi_queue = {
    _count: Api_queueCountAggregateOutputType | null;
    _avg: Api_queueAvgAggregateOutputType | null;
    _sum: Api_queueSumAggregateOutputType | null;
    _min: Api_queueMinAggregateOutputType | null;
    _max: Api_queueMaxAggregateOutputType | null;
  };

  export type Api_queueAvgAggregateOutputType = {
    retry_count: number | null;
    max_retries: number | null;
  };

  export type Api_queueSumAggregateOutputType = {
    retry_count: number | null;
    max_retries: number | null;
  };

  export type Api_queueMinAggregateOutputType = {
    id: string | null;
    url: string | null;
    method: string | null;
    status: $Enums.queue_status | null;
    type: string | null;
    retry_count: number | null;
    max_retries: number | null;
    last_error: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type Api_queueMaxAggregateOutputType = {
    id: string | null;
    url: string | null;
    method: string | null;
    status: $Enums.queue_status | null;
    type: string | null;
    retry_count: number | null;
    max_retries: number | null;
    last_error: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type Api_queueCountAggregateOutputType = {
    id: number;
    url: number;
    method: number;
    headers: number;
    body: number;
    status: number;
    type: number;
    retry_count: number;
    max_retries: number;
    last_error: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type Api_queueAvgAggregateInputType = {
    retry_count?: true;
    max_retries?: true;
  };

  export type Api_queueSumAggregateInputType = {
    retry_count?: true;
    max_retries?: true;
  };

  export type Api_queueMinAggregateInputType = {
    id?: true;
    url?: true;
    method?: true;
    status?: true;
    type?: true;
    retry_count?: true;
    max_retries?: true;
    last_error?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type Api_queueMaxAggregateInputType = {
    id?: true;
    url?: true;
    method?: true;
    status?: true;
    type?: true;
    retry_count?: true;
    max_retries?: true;
    last_error?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type Api_queueCountAggregateInputType = {
    id?: true;
    url?: true;
    method?: true;
    headers?: true;
    body?: true;
    status?: true;
    type?: true;
    retry_count?: true;
    max_retries?: true;
    last_error?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type Api_queueAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which api_queue to aggregate.
     */
    where?: api_queueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_queues to fetch.
     */
    orderBy?:
      | api_queueOrderByWithRelationInput
      | api_queueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: api_queueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_queues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_queues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned api_queues
     **/
    _count?: true | Api_queueCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Api_queueAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Api_queueSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Api_queueMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Api_queueMaxAggregateInputType;
  };

  export type GetApi_queueAggregateType<T extends Api_queueAggregateArgs> = {
    [P in keyof T & keyof AggregateApi_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_queue[P]>
      : GetScalarType<T[P], AggregateApi_queue[P]>;
  };

  export type api_queueGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: api_queueWhereInput;
    orderBy?:
      | api_queueOrderByWithAggregationInput
      | api_queueOrderByWithAggregationInput[];
    by: Api_queueScalarFieldEnum[] | Api_queueScalarFieldEnum;
    having?: api_queueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Api_queueCountAggregateInputType | true;
    _avg?: Api_queueAvgAggregateInputType;
    _sum?: Api_queueSumAggregateInputType;
    _min?: Api_queueMinAggregateInputType;
    _max?: Api_queueMaxAggregateInputType;
  };

  export type Api_queueGroupByOutputType = {
    id: string;
    url: string;
    method: string;
    headers: JsonValue | null;
    body: JsonValue | null;
    status: $Enums.queue_status;
    type: string;
    retry_count: number;
    max_retries: number;
    last_error: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: Api_queueCountAggregateOutputType | null;
    _avg: Api_queueAvgAggregateOutputType | null;
    _sum: Api_queueSumAggregateOutputType | null;
    _min: Api_queueMinAggregateOutputType | null;
    _max: Api_queueMaxAggregateOutputType | null;
  };

  type GetApi_queueGroupByPayload<T extends api_queueGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Api_queueGroupByOutputType, T['by']> & {
          [P in keyof T & keyof Api_queueGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Api_queueGroupByOutputType[P]>;
        }
      >
    >;

  export type api_queueSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      method?: boolean;
      headers?: boolean;
      body?: boolean;
      status?: boolean;
      type?: boolean;
      retry_count?: boolean;
      max_retries?: boolean;
      last_error?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['api_queue']
  >;

  export type api_queueSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      method?: boolean;
      headers?: boolean;
      body?: boolean;
      status?: boolean;
      type?: boolean;
      retry_count?: boolean;
      max_retries?: boolean;
      last_error?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['api_queue']
  >;

  export type api_queueSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      method?: boolean;
      headers?: boolean;
      body?: boolean;
      status?: boolean;
      type?: boolean;
      retry_count?: boolean;
      max_retries?: boolean;
      last_error?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['api_queue']
  >;

  export type api_queueSelectScalar = {
    id?: boolean;
    url?: boolean;
    method?: boolean;
    headers?: boolean;
    body?: boolean;
    status?: boolean;
    type?: boolean;
    retry_count?: boolean;
    max_retries?: boolean;
    last_error?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type api_queueOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'url'
    | 'method'
    | 'headers'
    | 'body'
    | 'status'
    | 'type'
    | 'retry_count'
    | 'max_retries'
    | 'last_error'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['api_queue']
  >;

  export type $api_queuePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'api_queue';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        url: string;
        method: string;
        headers: Prisma.JsonValue | null;
        body: Prisma.JsonValue | null;
        status: $Enums.queue_status;
        type: string;
        retry_count: number;
        max_retries: number;
        last_error: string | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['api_queue']
    >;
    composites: {};
  };

  type api_queueGetPayload<
    S extends boolean | null | undefined | api_queueDefaultArgs,
  > = $Result.GetResult<Prisma.$api_queuePayload, S>;

  type api_queueCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    api_queueFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: Api_queueCountAggregateInputType | true;
  };

  export interface api_queueDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['api_queue'];
      meta: { name: 'api_queue' };
    };
    /**
     * Find zero or one Api_queue that matches the filter.
     * @param {api_queueFindUniqueArgs} args - Arguments to find a Api_queue
     * @example
     * // Get one Api_queue
     * const api_queue = await prisma.api_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_queueFindUniqueArgs>(
      args: SelectSubset<T, api_queueFindUniqueArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Api_queue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_queueFindUniqueOrThrowArgs} args - Arguments to find a Api_queue
     * @example
     * // Get one Api_queue
     * const api_queue = await prisma.api_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_queueFindUniqueOrThrowArgs>(
      args: SelectSubset<T, api_queueFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Api_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_queueFindFirstArgs} args - Arguments to find a Api_queue
     * @example
     * // Get one Api_queue
     * const api_queue = await prisma.api_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_queueFindFirstArgs>(
      args?: SelectSubset<T, api_queueFindFirstArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Api_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_queueFindFirstOrThrowArgs} args - Arguments to find a Api_queue
     * @example
     * // Get one Api_queue
     * const api_queue = await prisma.api_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_queueFindFirstOrThrowArgs>(
      args?: SelectSubset<T, api_queueFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Api_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_queueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_queues
     * const api_queues = await prisma.api_queue.findMany()
     *
     * // Get first 10 Api_queues
     * const api_queues = await prisma.api_queue.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const api_queueWithIdOnly = await prisma.api_queue.findMany({ select: { id: true } })
     *
     */
    findMany<T extends api_queueFindManyArgs>(
      args?: SelectSubset<T, api_queueFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Api_queue.
     * @param {api_queueCreateArgs} args - Arguments to create a Api_queue.
     * @example
     * // Create one Api_queue
     * const Api_queue = await prisma.api_queue.create({
     *   data: {
     *     // ... data to create a Api_queue
     *   }
     * })
     *
     */
    create<T extends api_queueCreateArgs>(
      args: SelectSubset<T, api_queueCreateArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Api_queues.
     * @param {api_queueCreateManyArgs} args - Arguments to create many Api_queues.
     * @example
     * // Create many Api_queues
     * const api_queue = await prisma.api_queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends api_queueCreateManyArgs>(
      args?: SelectSubset<T, api_queueCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Api_queues and returns the data saved in the database.
     * @param {api_queueCreateManyAndReturnArgs} args - Arguments to create many Api_queues.
     * @example
     * // Create many Api_queues
     * const api_queue = await prisma.api_queue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Api_queues and only return the `id`
     * const api_queueWithIdOnly = await prisma.api_queue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends api_queueCreateManyAndReturnArgs>(
      args?: SelectSubset<T, api_queueCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Api_queue.
     * @param {api_queueDeleteArgs} args - Arguments to delete one Api_queue.
     * @example
     * // Delete one Api_queue
     * const Api_queue = await prisma.api_queue.delete({
     *   where: {
     *     // ... filter to delete one Api_queue
     *   }
     * })
     *
     */
    delete<T extends api_queueDeleteArgs>(
      args: SelectSubset<T, api_queueDeleteArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Api_queue.
     * @param {api_queueUpdateArgs} args - Arguments to update one Api_queue.
     * @example
     * // Update one Api_queue
     * const api_queue = await prisma.api_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends api_queueUpdateArgs>(
      args: SelectSubset<T, api_queueUpdateArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Api_queues.
     * @param {api_queueDeleteManyArgs} args - Arguments to filter Api_queues to delete.
     * @example
     * // Delete a few Api_queues
     * const { count } = await prisma.api_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends api_queueDeleteManyArgs>(
      args?: SelectSubset<T, api_queueDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Api_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_queues
     * const api_queue = await prisma.api_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends api_queueUpdateManyArgs>(
      args: SelectSubset<T, api_queueUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Api_queues and returns the data updated in the database.
     * @param {api_queueUpdateManyAndReturnArgs} args - Arguments to update many Api_queues.
     * @example
     * // Update many Api_queues
     * const api_queue = await prisma.api_queue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Api_queues and only return the `id`
     * const api_queueWithIdOnly = await prisma.api_queue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends api_queueUpdateManyAndReturnArgs>(
      args: SelectSubset<T, api_queueUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Api_queue.
     * @param {api_queueUpsertArgs} args - Arguments to update or create a Api_queue.
     * @example
     * // Update or create a Api_queue
     * const api_queue = await prisma.api_queue.upsert({
     *   create: {
     *     // ... data to create a Api_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_queue we want to update
     *   }
     * })
     */
    upsert<T extends api_queueUpsertArgs>(
      args: SelectSubset<T, api_queueUpsertArgs<ExtArgs>>,
    ): Prisma__api_queueClient<
      $Result.GetResult<
        Prisma.$api_queuePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Api_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_queueCountArgs} args - Arguments to filter Api_queues to count.
     * @example
     * // Count the number of Api_queues
     * const count = await prisma.api_queue.count({
     *   where: {
     *     // ... the filter for the Api_queues we want to count
     *   }
     * })
     **/
    count<T extends api_queueCountArgs>(
      args?: Subset<T, api_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_queueCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Api_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Api_queueAggregateArgs>(
      args: Subset<T, Api_queueAggregateArgs>,
    ): Prisma.PrismaPromise<GetApi_queueAggregateType<T>>;

    /**
     * Group by Api_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_queueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends api_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_queueGroupByArgs['orderBy'] }
        : { orderBy?: api_queueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, api_queueGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApi_queueGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the api_queue model
     */
    readonly fields: api_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_queueClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the api_queue model
   */
  interface api_queueFieldRefs {
    readonly id: FieldRef<'api_queue', 'String'>;
    readonly url: FieldRef<'api_queue', 'String'>;
    readonly method: FieldRef<'api_queue', 'String'>;
    readonly headers: FieldRef<'api_queue', 'Json'>;
    readonly body: FieldRef<'api_queue', 'Json'>;
    readonly status: FieldRef<'api_queue', 'queue_status'>;
    readonly type: FieldRef<'api_queue', 'String'>;
    readonly retry_count: FieldRef<'api_queue', 'Int'>;
    readonly max_retries: FieldRef<'api_queue', 'Int'>;
    readonly last_error: FieldRef<'api_queue', 'String'>;
    readonly created_at: FieldRef<'api_queue', 'DateTime'>;
    readonly updated_at: FieldRef<'api_queue', 'DateTime'>;
    readonly deleted_at: FieldRef<'api_queue', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * api_queue findUnique
   */
  export type api_queueFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * Filter, which api_queue to fetch.
     */
    where: api_queueWhereUniqueInput;
  };

  /**
   * api_queue findUniqueOrThrow
   */
  export type api_queueFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * Filter, which api_queue to fetch.
     */
    where: api_queueWhereUniqueInput;
  };

  /**
   * api_queue findFirst
   */
  export type api_queueFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * Filter, which api_queue to fetch.
     */
    where?: api_queueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_queues to fetch.
     */
    orderBy?:
      | api_queueOrderByWithRelationInput
      | api_queueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for api_queues.
     */
    cursor?: api_queueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_queues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_queues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of api_queues.
     */
    distinct?: Api_queueScalarFieldEnum | Api_queueScalarFieldEnum[];
  };

  /**
   * api_queue findFirstOrThrow
   */
  export type api_queueFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * Filter, which api_queue to fetch.
     */
    where?: api_queueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_queues to fetch.
     */
    orderBy?:
      | api_queueOrderByWithRelationInput
      | api_queueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for api_queues.
     */
    cursor?: api_queueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_queues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_queues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of api_queues.
     */
    distinct?: Api_queueScalarFieldEnum | Api_queueScalarFieldEnum[];
  };

  /**
   * api_queue findMany
   */
  export type api_queueFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * Filter, which api_queues to fetch.
     */
    where?: api_queueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_queues to fetch.
     */
    orderBy?:
      | api_queueOrderByWithRelationInput
      | api_queueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing api_queues.
     */
    cursor?: api_queueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_queues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_queues.
     */
    skip?: number;
    distinct?: Api_queueScalarFieldEnum | Api_queueScalarFieldEnum[];
  };

  /**
   * api_queue create
   */
  export type api_queueCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * The data needed to create a api_queue.
     */
    data: XOR<api_queueCreateInput, api_queueUncheckedCreateInput>;
  };

  /**
   * api_queue createMany
   */
  export type api_queueCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many api_queues.
     */
    data: api_queueCreateManyInput | api_queueCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * api_queue createManyAndReturn
   */
  export type api_queueCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * The data used to create many api_queues.
     */
    data: api_queueCreateManyInput | api_queueCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * api_queue update
   */
  export type api_queueUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * The data needed to update a api_queue.
     */
    data: XOR<api_queueUpdateInput, api_queueUncheckedUpdateInput>;
    /**
     * Choose, which api_queue to update.
     */
    where: api_queueWhereUniqueInput;
  };

  /**
   * api_queue updateMany
   */
  export type api_queueUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update api_queues.
     */
    data: XOR<
      api_queueUpdateManyMutationInput,
      api_queueUncheckedUpdateManyInput
    >;
    /**
     * Filter which api_queues to update
     */
    where?: api_queueWhereInput;
    /**
     * Limit how many api_queues to update.
     */
    limit?: number;
  };

  /**
   * api_queue updateManyAndReturn
   */
  export type api_queueUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * The data used to update api_queues.
     */
    data: XOR<
      api_queueUpdateManyMutationInput,
      api_queueUncheckedUpdateManyInput
    >;
    /**
     * Filter which api_queues to update
     */
    where?: api_queueWhereInput;
    /**
     * Limit how many api_queues to update.
     */
    limit?: number;
  };

  /**
   * api_queue upsert
   */
  export type api_queueUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * The filter to search for the api_queue to update in case it exists.
     */
    where: api_queueWhereUniqueInput;
    /**
     * In case the api_queue found by the `where` argument doesn't exist, create a new api_queue with this data.
     */
    create: XOR<api_queueCreateInput, api_queueUncheckedCreateInput>;
    /**
     * In case the api_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_queueUpdateInput, api_queueUncheckedUpdateInput>;
  };

  /**
   * api_queue delete
   */
  export type api_queueDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
    /**
     * Filter which api_queue to delete.
     */
    where: api_queueWhereUniqueInput;
  };

  /**
   * api_queue deleteMany
   */
  export type api_queueDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which api_queues to delete
     */
    where?: api_queueWhereInput;
    /**
     * Limit how many api_queues to delete.
     */
    limit?: number;
  };

  /**
   * api_queue without action
   */
  export type api_queueDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_queue
     */
    select?: api_queueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_queue
     */
    omit?: api_queueOmit<ExtArgs> | null;
  };

  /**
   * Model api_callback
   */

  export type AggregateApi_callback = {
    _count: Api_callbackCountAggregateOutputType | null;
    _avg: Api_callbackAvgAggregateOutputType | null;
    _sum: Api_callbackSumAggregateOutputType | null;
    _min: Api_callbackMinAggregateOutputType | null;
    _max: Api_callbackMaxAggregateOutputType | null;
  };

  export type Api_callbackAvgAggregateOutputType = {
    status_code: number | null;
  };

  export type Api_callbackSumAggregateOutputType = {
    status_code: number | null;
  };

  export type Api_callbackMinAggregateOutputType = {
    id: string | null;
    source: string | null;
    event_type: string | null;
    status_code: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type Api_callbackMaxAggregateOutputType = {
    id: string | null;
    source: string | null;
    event_type: string | null;
    status_code: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
  };

  export type Api_callbackCountAggregateOutputType = {
    id: number;
    source: number;
    event_type: number;
    payload: number;
    headers: number;
    status_code: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
  };

  export type Api_callbackAvgAggregateInputType = {
    status_code?: true;
  };

  export type Api_callbackSumAggregateInputType = {
    status_code?: true;
  };

  export type Api_callbackMinAggregateInputType = {
    id?: true;
    source?: true;
    event_type?: true;
    status_code?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type Api_callbackMaxAggregateInputType = {
    id?: true;
    source?: true;
    event_type?: true;
    status_code?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
  };

  export type Api_callbackCountAggregateInputType = {
    id?: true;
    source?: true;
    event_type?: true;
    payload?: true;
    headers?: true;
    status_code?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
  };

  export type Api_callbackAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which api_callback to aggregate.
     */
    where?: api_callbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_callbacks to fetch.
     */
    orderBy?:
      | api_callbackOrderByWithRelationInput
      | api_callbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: api_callbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_callbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_callbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned api_callbacks
     **/
    _count?: true | Api_callbackCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Api_callbackAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Api_callbackSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Api_callbackMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Api_callbackMaxAggregateInputType;
  };

  export type GetApi_callbackAggregateType<
    T extends Api_callbackAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateApi_callback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_callback[P]>
      : GetScalarType<T[P], AggregateApi_callback[P]>;
  };

  export type api_callbackGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: api_callbackWhereInput;
    orderBy?:
      | api_callbackOrderByWithAggregationInput
      | api_callbackOrderByWithAggregationInput[];
    by: Api_callbackScalarFieldEnum[] | Api_callbackScalarFieldEnum;
    having?: api_callbackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Api_callbackCountAggregateInputType | true;
    _avg?: Api_callbackAvgAggregateInputType;
    _sum?: Api_callbackSumAggregateInputType;
    _min?: Api_callbackMinAggregateInputType;
    _max?: Api_callbackMaxAggregateInputType;
  };

  export type Api_callbackGroupByOutputType = {
    id: string;
    source: string;
    event_type: string;
    payload: JsonValue;
    headers: JsonValue | null;
    status_code: number | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: Api_callbackCountAggregateOutputType | null;
    _avg: Api_callbackAvgAggregateOutputType | null;
    _sum: Api_callbackSumAggregateOutputType | null;
    _min: Api_callbackMinAggregateOutputType | null;
    _max: Api_callbackMaxAggregateOutputType | null;
  };

  type GetApi_callbackGroupByPayload<T extends api_callbackGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Api_callbackGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof Api_callbackGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_callbackGroupByOutputType[P]>
            : GetScalarType<T[P], Api_callbackGroupByOutputType[P]>;
        }
      >
    >;

  export type api_callbackSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      source?: boolean;
      event_type?: boolean;
      payload?: boolean;
      headers?: boolean;
      status_code?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['api_callback']
  >;

  export type api_callbackSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      source?: boolean;
      event_type?: boolean;
      payload?: boolean;
      headers?: boolean;
      status_code?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['api_callback']
  >;

  export type api_callbackSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      source?: boolean;
      event_type?: boolean;
      payload?: boolean;
      headers?: boolean;
      status_code?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      deleted_at?: boolean;
    },
    ExtArgs['result']['api_callback']
  >;

  export type api_callbackSelectScalar = {
    id?: boolean;
    source?: boolean;
    event_type?: boolean;
    payload?: boolean;
    headers?: boolean;
    status_code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
  };

  export type api_callbackOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'source'
    | 'event_type'
    | 'payload'
    | 'headers'
    | 'status_code'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at',
    ExtArgs['result']['api_callback']
  >;

  export type $api_callbackPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'api_callback';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        source: string;
        event_type: string;
        payload: Prisma.JsonValue;
        headers: Prisma.JsonValue | null;
        status_code: number | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
      },
      ExtArgs['result']['api_callback']
    >;
    composites: {};
  };

  type api_callbackGetPayload<
    S extends boolean | null | undefined | api_callbackDefaultArgs,
  > = $Result.GetResult<Prisma.$api_callbackPayload, S>;

  type api_callbackCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    api_callbackFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: Api_callbackCountAggregateInputType | true;
  };

  export interface api_callbackDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['api_callback'];
      meta: { name: 'api_callback' };
    };
    /**
     * Find zero or one Api_callback that matches the filter.
     * @param {api_callbackFindUniqueArgs} args - Arguments to find a Api_callback
     * @example
     * // Get one Api_callback
     * const api_callback = await prisma.api_callback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_callbackFindUniqueArgs>(
      args: SelectSubset<T, api_callbackFindUniqueArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Api_callback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_callbackFindUniqueOrThrowArgs} args - Arguments to find a Api_callback
     * @example
     * // Get one Api_callback
     * const api_callback = await prisma.api_callback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_callbackFindUniqueOrThrowArgs>(
      args: SelectSubset<T, api_callbackFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Api_callback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callbackFindFirstArgs} args - Arguments to find a Api_callback
     * @example
     * // Get one Api_callback
     * const api_callback = await prisma.api_callback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_callbackFindFirstArgs>(
      args?: SelectSubset<T, api_callbackFindFirstArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Api_callback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callbackFindFirstOrThrowArgs} args - Arguments to find a Api_callback
     * @example
     * // Get one Api_callback
     * const api_callback = await prisma.api_callback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_callbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, api_callbackFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Api_callbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_callbacks
     * const api_callbacks = await prisma.api_callback.findMany()
     *
     * // Get first 10 Api_callbacks
     * const api_callbacks = await prisma.api_callback.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const api_callbackWithIdOnly = await prisma.api_callback.findMany({ select: { id: true } })
     *
     */
    findMany<T extends api_callbackFindManyArgs>(
      args?: SelectSubset<T, api_callbackFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Api_callback.
     * @param {api_callbackCreateArgs} args - Arguments to create a Api_callback.
     * @example
     * // Create one Api_callback
     * const Api_callback = await prisma.api_callback.create({
     *   data: {
     *     // ... data to create a Api_callback
     *   }
     * })
     *
     */
    create<T extends api_callbackCreateArgs>(
      args: SelectSubset<T, api_callbackCreateArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Api_callbacks.
     * @param {api_callbackCreateManyArgs} args - Arguments to create many Api_callbacks.
     * @example
     * // Create many Api_callbacks
     * const api_callback = await prisma.api_callback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends api_callbackCreateManyArgs>(
      args?: SelectSubset<T, api_callbackCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Api_callbacks and returns the data saved in the database.
     * @param {api_callbackCreateManyAndReturnArgs} args - Arguments to create many Api_callbacks.
     * @example
     * // Create many Api_callbacks
     * const api_callback = await prisma.api_callback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Api_callbacks and only return the `id`
     * const api_callbackWithIdOnly = await prisma.api_callback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends api_callbackCreateManyAndReturnArgs>(
      args?: SelectSubset<T, api_callbackCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Api_callback.
     * @param {api_callbackDeleteArgs} args - Arguments to delete one Api_callback.
     * @example
     * // Delete one Api_callback
     * const Api_callback = await prisma.api_callback.delete({
     *   where: {
     *     // ... filter to delete one Api_callback
     *   }
     * })
     *
     */
    delete<T extends api_callbackDeleteArgs>(
      args: SelectSubset<T, api_callbackDeleteArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Api_callback.
     * @param {api_callbackUpdateArgs} args - Arguments to update one Api_callback.
     * @example
     * // Update one Api_callback
     * const api_callback = await prisma.api_callback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends api_callbackUpdateArgs>(
      args: SelectSubset<T, api_callbackUpdateArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Api_callbacks.
     * @param {api_callbackDeleteManyArgs} args - Arguments to filter Api_callbacks to delete.
     * @example
     * // Delete a few Api_callbacks
     * const { count } = await prisma.api_callback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends api_callbackDeleteManyArgs>(
      args?: SelectSubset<T, api_callbackDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Api_callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_callbacks
     * const api_callback = await prisma.api_callback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends api_callbackUpdateManyArgs>(
      args: SelectSubset<T, api_callbackUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Api_callbacks and returns the data updated in the database.
     * @param {api_callbackUpdateManyAndReturnArgs} args - Arguments to update many Api_callbacks.
     * @example
     * // Update many Api_callbacks
     * const api_callback = await prisma.api_callback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Api_callbacks and only return the `id`
     * const api_callbackWithIdOnly = await prisma.api_callback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends api_callbackUpdateManyAndReturnArgs>(
      args: SelectSubset<T, api_callbackUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Api_callback.
     * @param {api_callbackUpsertArgs} args - Arguments to update or create a Api_callback.
     * @example
     * // Update or create a Api_callback
     * const api_callback = await prisma.api_callback.upsert({
     *   create: {
     *     // ... data to create a Api_callback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_callback we want to update
     *   }
     * })
     */
    upsert<T extends api_callbackUpsertArgs>(
      args: SelectSubset<T, api_callbackUpsertArgs<ExtArgs>>,
    ): Prisma__api_callbackClient<
      $Result.GetResult<
        Prisma.$api_callbackPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Api_callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callbackCountArgs} args - Arguments to filter Api_callbacks to count.
     * @example
     * // Count the number of Api_callbacks
     * const count = await prisma.api_callback.count({
     *   where: {
     *     // ... the filter for the Api_callbacks we want to count
     *   }
     * })
     **/
    count<T extends api_callbackCountArgs>(
      args?: Subset<T, api_callbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_callbackCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Api_callback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_callbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Api_callbackAggregateArgs>(
      args: Subset<T, Api_callbackAggregateArgs>,
    ): Prisma.PrismaPromise<GetApi_callbackAggregateType<T>>;

    /**
     * Group by Api_callback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_callbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends api_callbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_callbackGroupByArgs['orderBy'] }
        : { orderBy?: api_callbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, api_callbackGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApi_callbackGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the api_callback model
     */
    readonly fields: api_callbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_callback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_callbackClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the api_callback model
   */
  interface api_callbackFieldRefs {
    readonly id: FieldRef<'api_callback', 'String'>;
    readonly source: FieldRef<'api_callback', 'String'>;
    readonly event_type: FieldRef<'api_callback', 'String'>;
    readonly payload: FieldRef<'api_callback', 'Json'>;
    readonly headers: FieldRef<'api_callback', 'Json'>;
    readonly status_code: FieldRef<'api_callback', 'Int'>;
    readonly created_at: FieldRef<'api_callback', 'DateTime'>;
    readonly updated_at: FieldRef<'api_callback', 'DateTime'>;
    readonly deleted_at: FieldRef<'api_callback', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * api_callback findUnique
   */
  export type api_callbackFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * Filter, which api_callback to fetch.
     */
    where: api_callbackWhereUniqueInput;
  };

  /**
   * api_callback findUniqueOrThrow
   */
  export type api_callbackFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * Filter, which api_callback to fetch.
     */
    where: api_callbackWhereUniqueInput;
  };

  /**
   * api_callback findFirst
   */
  export type api_callbackFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * Filter, which api_callback to fetch.
     */
    where?: api_callbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_callbacks to fetch.
     */
    orderBy?:
      | api_callbackOrderByWithRelationInput
      | api_callbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for api_callbacks.
     */
    cursor?: api_callbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_callbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_callbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of api_callbacks.
     */
    distinct?: Api_callbackScalarFieldEnum | Api_callbackScalarFieldEnum[];
  };

  /**
   * api_callback findFirstOrThrow
   */
  export type api_callbackFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * Filter, which api_callback to fetch.
     */
    where?: api_callbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_callbacks to fetch.
     */
    orderBy?:
      | api_callbackOrderByWithRelationInput
      | api_callbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for api_callbacks.
     */
    cursor?: api_callbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_callbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_callbacks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of api_callbacks.
     */
    distinct?: Api_callbackScalarFieldEnum | Api_callbackScalarFieldEnum[];
  };

  /**
   * api_callback findMany
   */
  export type api_callbackFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * Filter, which api_callbacks to fetch.
     */
    where?: api_callbackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of api_callbacks to fetch.
     */
    orderBy?:
      | api_callbackOrderByWithRelationInput
      | api_callbackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing api_callbacks.
     */
    cursor?: api_callbackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` api_callbacks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` api_callbacks.
     */
    skip?: number;
    distinct?: Api_callbackScalarFieldEnum | Api_callbackScalarFieldEnum[];
  };

  /**
   * api_callback create
   */
  export type api_callbackCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * The data needed to create a api_callback.
     */
    data: XOR<api_callbackCreateInput, api_callbackUncheckedCreateInput>;
  };

  /**
   * api_callback createMany
   */
  export type api_callbackCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many api_callbacks.
     */
    data: api_callbackCreateManyInput | api_callbackCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * api_callback createManyAndReturn
   */
  export type api_callbackCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * The data used to create many api_callbacks.
     */
    data: api_callbackCreateManyInput | api_callbackCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * api_callback update
   */
  export type api_callbackUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * The data needed to update a api_callback.
     */
    data: XOR<api_callbackUpdateInput, api_callbackUncheckedUpdateInput>;
    /**
     * Choose, which api_callback to update.
     */
    where: api_callbackWhereUniqueInput;
  };

  /**
   * api_callback updateMany
   */
  export type api_callbackUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update api_callbacks.
     */
    data: XOR<
      api_callbackUpdateManyMutationInput,
      api_callbackUncheckedUpdateManyInput
    >;
    /**
     * Filter which api_callbacks to update
     */
    where?: api_callbackWhereInput;
    /**
     * Limit how many api_callbacks to update.
     */
    limit?: number;
  };

  /**
   * api_callback updateManyAndReturn
   */
  export type api_callbackUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * The data used to update api_callbacks.
     */
    data: XOR<
      api_callbackUpdateManyMutationInput,
      api_callbackUncheckedUpdateManyInput
    >;
    /**
     * Filter which api_callbacks to update
     */
    where?: api_callbackWhereInput;
    /**
     * Limit how many api_callbacks to update.
     */
    limit?: number;
  };

  /**
   * api_callback upsert
   */
  export type api_callbackUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * The filter to search for the api_callback to update in case it exists.
     */
    where: api_callbackWhereUniqueInput;
    /**
     * In case the api_callback found by the `where` argument doesn't exist, create a new api_callback with this data.
     */
    create: XOR<api_callbackCreateInput, api_callbackUncheckedCreateInput>;
    /**
     * In case the api_callback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_callbackUpdateInput, api_callbackUncheckedUpdateInput>;
  };

  /**
   * api_callback delete
   */
  export type api_callbackDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
    /**
     * Filter which api_callback to delete.
     */
    where: api_callbackWhereUniqueInput;
  };

  /**
   * api_callback deleteMany
   */
  export type api_callbackDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which api_callbacks to delete
     */
    where?: api_callbackWhereInput;
    /**
     * Limit how many api_callbacks to delete.
     */
    limit?: number;
  };

  /**
   * api_callback without action
   */
  export type api_callbackDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the api_callback
     */
    select?: api_callbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the api_callback
     */
    omit?: api_callbackOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    username: 'username';
    password: 'password';
    display_name: 'display_name';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProfileScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    bio: 'bio';
    xendit_api_key: 'xendit_api_key';
    notification_settings: 'notification_settings';
    social_links: 'social_links';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type ProfileScalarFieldEnum =
    (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const DonationScalarFieldEnum: {
    id: 'id';
    external_id: 'external_id';
    amount: 'amount';
    currency: 'currency';
    donor_name: 'donor_name';
    message: 'message';
    status: 'status';
    payment_url: 'payment_url';
    payment_method: 'payment_method';
    recipient_id: 'recipient_id';
    donor_id: 'donor_id';
    media_type: 'media_type';
    media_url: 'media_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type DonationScalarFieldEnum =
    (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum];

  export const TransactionScalarFieldEnum: {
    id: 'id';
    donation_id: 'donation_id';
    amount: 'amount';
    currency: 'currency';
    status: 'status';
    reference_id: 'reference_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type TransactionScalarFieldEnum =
    (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

  export const OverlayScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    type: 'type';
    name: 'name';
    config: 'config';
    token: 'token';
    is_active: 'is_active';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type OverlayScalarFieldEnum =
    (typeof OverlayScalarFieldEnum)[keyof typeof OverlayScalarFieldEnum];

  export const GoalScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    title: 'title';
    target_amount: 'target_amount';
    current_amount: 'current_amount';
    start_date: 'start_date';
    end_date: 'end_date';
    is_active: 'is_active';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type GoalScalarFieldEnum =
    (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum];

  export const Api_queueScalarFieldEnum: {
    id: 'id';
    url: 'url';
    method: 'method';
    headers: 'headers';
    body: 'body';
    status: 'status';
    type: 'type';
    retry_count: 'retry_count';
    max_retries: 'max_retries';
    last_error: 'last_error';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type Api_queueScalarFieldEnum =
    (typeof Api_queueScalarFieldEnum)[keyof typeof Api_queueScalarFieldEnum];

  export const Api_callbackScalarFieldEnum: {
    id: 'id';
    source: 'source';
    event_type: 'event_type';
    payload: 'payload';
    headers: 'headers';
    status_code: 'status_code';
    created_at: 'created_at';
    updated_at: 'updated_at';
    deleted_at: 'deleted_at';
  };

  export type Api_callbackScalarFieldEnum =
    (typeof Api_callbackScalarFieldEnum)[keyof typeof Api_callbackScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >;

  /**
   * Reference to a field of type 'donation_status'
   */
  export type Enumdonation_statusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'donation_status'>;

  /**
   * Reference to a field of type 'donation_status[]'
   */
  export type ListEnumdonation_statusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'donation_status[]'>;

  /**
   * Reference to a field of type 'transaction_status'
   */
  export type Enumtransaction_statusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'transaction_status'>;

  /**
   * Reference to a field of type 'transaction_status[]'
   */
  export type ListEnumtransaction_statusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'transaction_status[]'>;

  /**
   * Reference to a field of type 'overlay_type'
   */
  export type Enumoverlay_typeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'overlay_type'
  >;

  /**
   * Reference to a field of type 'overlay_type[]'
   */
  export type ListEnumoverlay_typeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'overlay_type[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'queue_status'
   */
  export type Enumqueue_statusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'queue_status'
  >;

  /**
   * Reference to a field of type 'queue_status[]'
   */
  export type ListEnumqueue_statusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'queue_status[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: StringFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    username?: StringFilter<'user'> | string;
    password?: StringFilter<'user'> | string;
    display_name?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'user'> | Date | string | null;
    profile?: XOR<
      ProfileNullableScalarRelationFilter,
      profileWhereInput
    > | null;
    donations?: DonationListRelationFilter;
    received_donations?: DonationListRelationFilter;
    overlays?: OverlayListRelationFilter;
    goals?: GoalListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    display_name?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    profile?: profileOrderByWithRelationInput;
    donations?: donationOrderByRelationAggregateInput;
    received_donations?: donationOrderByRelationAggregateInput;
    overlays?: overlayOrderByRelationAggregateInput;
    goals?: goalOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      username?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      password?: StringFilter<'user'> | string;
      display_name?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'user'> | Date | string | null;
      profile?: XOR<
        ProfileNullableScalarRelationFilter,
        profileWhereInput
      > | null;
      donations?: DonationListRelationFilter;
      received_donations?: DonationListRelationFilter;
      overlays?: OverlayListRelationFilter;
      goals?: GoalListRelationFilter;
    },
    'id' | 'email' | 'username'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    display_name?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?:
      | userScalarWhereWithAggregatesInput
      | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?:
      | userScalarWhereWithAggregatesInput
      | userScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    username?: StringWithAggregatesFilter<'user'> | string;
    password?: StringWithAggregatesFilter<'user'> | string;
    display_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'user'>
      | Date
      | string
      | null;
  };

  export type profileWhereInput = {
    AND?: profileWhereInput | profileWhereInput[];
    OR?: profileWhereInput[];
    NOT?: profileWhereInput | profileWhereInput[];
    id?: StringFilter<'profile'> | string;
    user_id?: StringFilter<'profile'> | string;
    bio?: StringNullableFilter<'profile'> | string | null;
    xendit_api_key?: StringNullableFilter<'profile'> | string | null;
    notification_settings?: JsonNullableFilter<'profile'>;
    social_links?: JsonNullableFilter<'profile'>;
    created_at?: DateTimeFilter<'profile'> | Date | string;
    updated_at?: DateTimeFilter<'profile'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'profile'> | Date | string | null;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type profileOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    xendit_api_key?: SortOrderInput | SortOrder;
    notification_settings?: SortOrderInput | SortOrder;
    social_links?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type profileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      user_id?: string;
      AND?: profileWhereInput | profileWhereInput[];
      OR?: profileWhereInput[];
      NOT?: profileWhereInput | profileWhereInput[];
      bio?: StringNullableFilter<'profile'> | string | null;
      xendit_api_key?: StringNullableFilter<'profile'> | string | null;
      notification_settings?: JsonNullableFilter<'profile'>;
      social_links?: JsonNullableFilter<'profile'>;
      created_at?: DateTimeFilter<'profile'> | Date | string;
      updated_at?: DateTimeFilter<'profile'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'profile'> | Date | string | null;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    'id' | 'user_id'
  >;

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    xendit_api_key?: SortOrderInput | SortOrder;
    notification_settings?: SortOrderInput | SortOrder;
    social_links?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: profileCountOrderByAggregateInput;
    _max?: profileMaxOrderByAggregateInput;
    _min?: profileMinOrderByAggregateInput;
  };

  export type profileScalarWhereWithAggregatesInput = {
    AND?:
      | profileScalarWhereWithAggregatesInput
      | profileScalarWhereWithAggregatesInput[];
    OR?: profileScalarWhereWithAggregatesInput[];
    NOT?:
      | profileScalarWhereWithAggregatesInput
      | profileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'profile'> | string;
    user_id?: StringWithAggregatesFilter<'profile'> | string;
    bio?: StringNullableWithAggregatesFilter<'profile'> | string | null;
    xendit_api_key?:
      | StringNullableWithAggregatesFilter<'profile'>
      | string
      | null;
    notification_settings?: JsonNullableWithAggregatesFilter<'profile'>;
    social_links?: JsonNullableWithAggregatesFilter<'profile'>;
    created_at?: DateTimeWithAggregatesFilter<'profile'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'profile'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'profile'>
      | Date
      | string
      | null;
  };

  export type donationWhereInput = {
    AND?: donationWhereInput | donationWhereInput[];
    OR?: donationWhereInput[];
    NOT?: donationWhereInput | donationWhereInput[];
    id?: StringFilter<'donation'> | string;
    external_id?: StringFilter<'donation'> | string;
    amount?:
      | DecimalFilter<'donation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFilter<'donation'> | string;
    donor_name?: StringFilter<'donation'> | string;
    message?: StringNullableFilter<'donation'> | string | null;
    status?: Enumdonation_statusFilter<'donation'> | $Enums.donation_status;
    payment_url?: StringNullableFilter<'donation'> | string | null;
    payment_method?: StringNullableFilter<'donation'> | string | null;
    recipient_id?: StringFilter<'donation'> | string;
    donor_id?: StringNullableFilter<'donation'> | string | null;
    media_type?: StringNullableFilter<'donation'> | string | null;
    media_url?: StringNullableFilter<'donation'> | string | null;
    created_at?: DateTimeFilter<'donation'> | Date | string;
    updated_at?: DateTimeFilter<'donation'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'donation'> | Date | string | null;
    recipient?: XOR<UserScalarRelationFilter, userWhereInput>;
    donor?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null;
    transactions?: TransactionListRelationFilter;
  };

  export type donationOrderByWithRelationInput = {
    id?: SortOrder;
    external_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    donor_name?: SortOrder;
    message?: SortOrderInput | SortOrder;
    status?: SortOrder;
    payment_url?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    recipient_id?: SortOrder;
    donor_id?: SortOrderInput | SortOrder;
    media_type?: SortOrderInput | SortOrder;
    media_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    recipient?: userOrderByWithRelationInput;
    donor?: userOrderByWithRelationInput;
    transactions?: transactionOrderByRelationAggregateInput;
  };

  export type donationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      external_id?: string;
      AND?: donationWhereInput | donationWhereInput[];
      OR?: donationWhereInput[];
      NOT?: donationWhereInput | donationWhereInput[];
      amount?:
        | DecimalFilter<'donation'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      currency?: StringFilter<'donation'> | string;
      donor_name?: StringFilter<'donation'> | string;
      message?: StringNullableFilter<'donation'> | string | null;
      status?: Enumdonation_statusFilter<'donation'> | $Enums.donation_status;
      payment_url?: StringNullableFilter<'donation'> | string | null;
      payment_method?: StringNullableFilter<'donation'> | string | null;
      recipient_id?: StringFilter<'donation'> | string;
      donor_id?: StringNullableFilter<'donation'> | string | null;
      media_type?: StringNullableFilter<'donation'> | string | null;
      media_url?: StringNullableFilter<'donation'> | string | null;
      created_at?: DateTimeFilter<'donation'> | Date | string;
      updated_at?: DateTimeFilter<'donation'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'donation'> | Date | string | null;
      recipient?: XOR<UserScalarRelationFilter, userWhereInput>;
      donor?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null;
      transactions?: TransactionListRelationFilter;
    },
    'id' | 'external_id'
  >;

  export type donationOrderByWithAggregationInput = {
    id?: SortOrder;
    external_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    donor_name?: SortOrder;
    message?: SortOrderInput | SortOrder;
    status?: SortOrder;
    payment_url?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    recipient_id?: SortOrder;
    donor_id?: SortOrderInput | SortOrder;
    media_type?: SortOrderInput | SortOrder;
    media_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: donationCountOrderByAggregateInput;
    _avg?: donationAvgOrderByAggregateInput;
    _max?: donationMaxOrderByAggregateInput;
    _min?: donationMinOrderByAggregateInput;
    _sum?: donationSumOrderByAggregateInput;
  };

  export type donationScalarWhereWithAggregatesInput = {
    AND?:
      | donationScalarWhereWithAggregatesInput
      | donationScalarWhereWithAggregatesInput[];
    OR?: donationScalarWhereWithAggregatesInput[];
    NOT?:
      | donationScalarWhereWithAggregatesInput
      | donationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'donation'> | string;
    external_id?: StringWithAggregatesFilter<'donation'> | string;
    amount?:
      | DecimalWithAggregatesFilter<'donation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringWithAggregatesFilter<'donation'> | string;
    donor_name?: StringWithAggregatesFilter<'donation'> | string;
    message?: StringNullableWithAggregatesFilter<'donation'> | string | null;
    status?:
      | Enumdonation_statusWithAggregatesFilter<'donation'>
      | $Enums.donation_status;
    payment_url?:
      | StringNullableWithAggregatesFilter<'donation'>
      | string
      | null;
    payment_method?:
      | StringNullableWithAggregatesFilter<'donation'>
      | string
      | null;
    recipient_id?: StringWithAggregatesFilter<'donation'> | string;
    donor_id?: StringNullableWithAggregatesFilter<'donation'> | string | null;
    media_type?: StringNullableWithAggregatesFilter<'donation'> | string | null;
    media_url?: StringNullableWithAggregatesFilter<'donation'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'donation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'donation'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'donation'>
      | Date
      | string
      | null;
  };

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[];
    OR?: transactionWhereInput[];
    NOT?: transactionWhereInput | transactionWhereInput[];
    id?: StringFilter<'transaction'> | string;
    donation_id?: StringFilter<'transaction'> | string;
    amount?:
      | DecimalFilter<'transaction'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFilter<'transaction'> | string;
    status?:
      | Enumtransaction_statusFilter<'transaction'>
      | $Enums.transaction_status;
    reference_id?: StringNullableFilter<'transaction'> | string | null;
    created_at?: DateTimeFilter<'transaction'> | Date | string;
    updated_at?: DateTimeFilter<'transaction'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'transaction'> | Date | string | null;
    donation?: XOR<DonationScalarRelationFilter, donationWhereInput>;
  };

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder;
    donation_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    status?: SortOrder;
    reference_id?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    donation?: donationOrderByWithRelationInput;
  };

  export type transactionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      reference_id?: string;
      AND?: transactionWhereInput | transactionWhereInput[];
      OR?: transactionWhereInput[];
      NOT?: transactionWhereInput | transactionWhereInput[];
      donation_id?: StringFilter<'transaction'> | string;
      amount?:
        | DecimalFilter<'transaction'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      currency?: StringFilter<'transaction'> | string;
      status?:
        | Enumtransaction_statusFilter<'transaction'>
        | $Enums.transaction_status;
      created_at?: DateTimeFilter<'transaction'> | Date | string;
      updated_at?: DateTimeFilter<'transaction'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'transaction'> | Date | string | null;
      donation?: XOR<DonationScalarRelationFilter, donationWhereInput>;
    },
    'id' | 'reference_id'
  >;

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder;
    donation_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    status?: SortOrder;
    reference_id?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: transactionCountOrderByAggregateInput;
    _avg?: transactionAvgOrderByAggregateInput;
    _max?: transactionMaxOrderByAggregateInput;
    _min?: transactionMinOrderByAggregateInput;
    _sum?: transactionSumOrderByAggregateInput;
  };

  export type transactionScalarWhereWithAggregatesInput = {
    AND?:
      | transactionScalarWhereWithAggregatesInput
      | transactionScalarWhereWithAggregatesInput[];
    OR?: transactionScalarWhereWithAggregatesInput[];
    NOT?:
      | transactionScalarWhereWithAggregatesInput
      | transactionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'transaction'> | string;
    donation_id?: StringWithAggregatesFilter<'transaction'> | string;
    amount?:
      | DecimalWithAggregatesFilter<'transaction'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringWithAggregatesFilter<'transaction'> | string;
    status?:
      | Enumtransaction_statusWithAggregatesFilter<'transaction'>
      | $Enums.transaction_status;
    reference_id?:
      | StringNullableWithAggregatesFilter<'transaction'>
      | string
      | null;
    created_at?: DateTimeWithAggregatesFilter<'transaction'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'transaction'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'transaction'>
      | Date
      | string
      | null;
  };

  export type overlayWhereInput = {
    AND?: overlayWhereInput | overlayWhereInput[];
    OR?: overlayWhereInput[];
    NOT?: overlayWhereInput | overlayWhereInput[];
    id?: StringFilter<'overlay'> | string;
    user_id?: StringFilter<'overlay'> | string;
    type?: Enumoverlay_typeFilter<'overlay'> | $Enums.overlay_type;
    name?: StringFilter<'overlay'> | string;
    config?: JsonFilter<'overlay'>;
    token?: StringFilter<'overlay'> | string;
    is_active?: BoolFilter<'overlay'> | boolean;
    created_at?: DateTimeFilter<'overlay'> | Date | string;
    updated_at?: DateTimeFilter<'overlay'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'overlay'> | Date | string | null;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type overlayOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type?: SortOrder;
    name?: SortOrder;
    config?: SortOrder;
    token?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type overlayWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: overlayWhereInput | overlayWhereInput[];
      OR?: overlayWhereInput[];
      NOT?: overlayWhereInput | overlayWhereInput[];
      user_id?: StringFilter<'overlay'> | string;
      type?: Enumoverlay_typeFilter<'overlay'> | $Enums.overlay_type;
      name?: StringFilter<'overlay'> | string;
      config?: JsonFilter<'overlay'>;
      is_active?: BoolFilter<'overlay'> | boolean;
      created_at?: DateTimeFilter<'overlay'> | Date | string;
      updated_at?: DateTimeFilter<'overlay'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'overlay'> | Date | string | null;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    'id' | 'token'
  >;

  export type overlayOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type?: SortOrder;
    name?: SortOrder;
    config?: SortOrder;
    token?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: overlayCountOrderByAggregateInput;
    _max?: overlayMaxOrderByAggregateInput;
    _min?: overlayMinOrderByAggregateInput;
  };

  export type overlayScalarWhereWithAggregatesInput = {
    AND?:
      | overlayScalarWhereWithAggregatesInput
      | overlayScalarWhereWithAggregatesInput[];
    OR?: overlayScalarWhereWithAggregatesInput[];
    NOT?:
      | overlayScalarWhereWithAggregatesInput
      | overlayScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'overlay'> | string;
    user_id?: StringWithAggregatesFilter<'overlay'> | string;
    type?:
      | Enumoverlay_typeWithAggregatesFilter<'overlay'>
      | $Enums.overlay_type;
    name?: StringWithAggregatesFilter<'overlay'> | string;
    config?: JsonWithAggregatesFilter<'overlay'>;
    token?: StringWithAggregatesFilter<'overlay'> | string;
    is_active?: BoolWithAggregatesFilter<'overlay'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'overlay'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'overlay'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'overlay'>
      | Date
      | string
      | null;
  };

  export type goalWhereInput = {
    AND?: goalWhereInput | goalWhereInput[];
    OR?: goalWhereInput[];
    NOT?: goalWhereInput | goalWhereInput[];
    id?: StringFilter<'goal'> | string;
    user_id?: StringFilter<'goal'> | string;
    title?: StringFilter<'goal'> | string;
    target_amount?:
      | DecimalFilter<'goal'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFilter<'goal'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFilter<'goal'> | Date | string;
    end_date?: DateTimeNullableFilter<'goal'> | Date | string | null;
    is_active?: BoolFilter<'goal'> | boolean;
    created_at?: DateTimeFilter<'goal'> | Date | string;
    updated_at?: DateTimeFilter<'goal'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'goal'> | Date | string | null;
    user?: XOR<UserScalarRelationFilter, userWhereInput>;
  };

  export type goalOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    target_amount?: SortOrder;
    current_amount?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type goalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: goalWhereInput | goalWhereInput[];
      OR?: goalWhereInput[];
      NOT?: goalWhereInput | goalWhereInput[];
      user_id?: StringFilter<'goal'> | string;
      title?: StringFilter<'goal'> | string;
      target_amount?:
        | DecimalFilter<'goal'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      current_amount?:
        | DecimalFilter<'goal'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      start_date?: DateTimeFilter<'goal'> | Date | string;
      end_date?: DateTimeNullableFilter<'goal'> | Date | string | null;
      is_active?: BoolFilter<'goal'> | boolean;
      created_at?: DateTimeFilter<'goal'> | Date | string;
      updated_at?: DateTimeFilter<'goal'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'goal'> | Date | string | null;
      user?: XOR<UserScalarRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type goalOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    target_amount?: SortOrder;
    current_amount?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: goalCountOrderByAggregateInput;
    _avg?: goalAvgOrderByAggregateInput;
    _max?: goalMaxOrderByAggregateInput;
    _min?: goalMinOrderByAggregateInput;
    _sum?: goalSumOrderByAggregateInput;
  };

  export type goalScalarWhereWithAggregatesInput = {
    AND?:
      | goalScalarWhereWithAggregatesInput
      | goalScalarWhereWithAggregatesInput[];
    OR?: goalScalarWhereWithAggregatesInput[];
    NOT?:
      | goalScalarWhereWithAggregatesInput
      | goalScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'goal'> | string;
    user_id?: StringWithAggregatesFilter<'goal'> | string;
    title?: StringWithAggregatesFilter<'goal'> | string;
    target_amount?:
      | DecimalWithAggregatesFilter<'goal'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalWithAggregatesFilter<'goal'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeWithAggregatesFilter<'goal'> | Date | string;
    end_date?:
      | DateTimeNullableWithAggregatesFilter<'goal'>
      | Date
      | string
      | null;
    is_active?: BoolWithAggregatesFilter<'goal'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'goal'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'goal'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'goal'>
      | Date
      | string
      | null;
  };

  export type api_queueWhereInput = {
    AND?: api_queueWhereInput | api_queueWhereInput[];
    OR?: api_queueWhereInput[];
    NOT?: api_queueWhereInput | api_queueWhereInput[];
    id?: StringFilter<'api_queue'> | string;
    url?: StringFilter<'api_queue'> | string;
    method?: StringFilter<'api_queue'> | string;
    headers?: JsonNullableFilter<'api_queue'>;
    body?: JsonNullableFilter<'api_queue'>;
    status?: Enumqueue_statusFilter<'api_queue'> | $Enums.queue_status;
    type?: StringFilter<'api_queue'> | string;
    retry_count?: IntFilter<'api_queue'> | number;
    max_retries?: IntFilter<'api_queue'> | number;
    last_error?: StringNullableFilter<'api_queue'> | string | null;
    created_at?: DateTimeFilter<'api_queue'> | Date | string;
    updated_at?: DateTimeFilter<'api_queue'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'api_queue'> | Date | string | null;
  };

  export type api_queueOrderByWithRelationInput = {
    id?: SortOrder;
    url?: SortOrder;
    method?: SortOrder;
    headers?: SortOrderInput | SortOrder;
    body?: SortOrderInput | SortOrder;
    status?: SortOrder;
    type?: SortOrder;
    retry_count?: SortOrder;
    max_retries?: SortOrder;
    last_error?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
  };

  export type api_queueWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: api_queueWhereInput | api_queueWhereInput[];
      OR?: api_queueWhereInput[];
      NOT?: api_queueWhereInput | api_queueWhereInput[];
      url?: StringFilter<'api_queue'> | string;
      method?: StringFilter<'api_queue'> | string;
      headers?: JsonNullableFilter<'api_queue'>;
      body?: JsonNullableFilter<'api_queue'>;
      status?: Enumqueue_statusFilter<'api_queue'> | $Enums.queue_status;
      type?: StringFilter<'api_queue'> | string;
      retry_count?: IntFilter<'api_queue'> | number;
      max_retries?: IntFilter<'api_queue'> | number;
      last_error?: StringNullableFilter<'api_queue'> | string | null;
      created_at?: DateTimeFilter<'api_queue'> | Date | string;
      updated_at?: DateTimeFilter<'api_queue'> | Date | string;
      deleted_at?: DateTimeNullableFilter<'api_queue'> | Date | string | null;
    },
    'id'
  >;

  export type api_queueOrderByWithAggregationInput = {
    id?: SortOrder;
    url?: SortOrder;
    method?: SortOrder;
    headers?: SortOrderInput | SortOrder;
    body?: SortOrderInput | SortOrder;
    status?: SortOrder;
    type?: SortOrder;
    retry_count?: SortOrder;
    max_retries?: SortOrder;
    last_error?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: api_queueCountOrderByAggregateInput;
    _avg?: api_queueAvgOrderByAggregateInput;
    _max?: api_queueMaxOrderByAggregateInput;
    _min?: api_queueMinOrderByAggregateInput;
    _sum?: api_queueSumOrderByAggregateInput;
  };

  export type api_queueScalarWhereWithAggregatesInput = {
    AND?:
      | api_queueScalarWhereWithAggregatesInput
      | api_queueScalarWhereWithAggregatesInput[];
    OR?: api_queueScalarWhereWithAggregatesInput[];
    NOT?:
      | api_queueScalarWhereWithAggregatesInput
      | api_queueScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'api_queue'> | string;
    url?: StringWithAggregatesFilter<'api_queue'> | string;
    method?: StringWithAggregatesFilter<'api_queue'> | string;
    headers?: JsonNullableWithAggregatesFilter<'api_queue'>;
    body?: JsonNullableWithAggregatesFilter<'api_queue'>;
    status?:
      | Enumqueue_statusWithAggregatesFilter<'api_queue'>
      | $Enums.queue_status;
    type?: StringWithAggregatesFilter<'api_queue'> | string;
    retry_count?: IntWithAggregatesFilter<'api_queue'> | number;
    max_retries?: IntWithAggregatesFilter<'api_queue'> | number;
    last_error?:
      | StringNullableWithAggregatesFilter<'api_queue'>
      | string
      | null;
    created_at?: DateTimeWithAggregatesFilter<'api_queue'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'api_queue'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'api_queue'>
      | Date
      | string
      | null;
  };

  export type api_callbackWhereInput = {
    AND?: api_callbackWhereInput | api_callbackWhereInput[];
    OR?: api_callbackWhereInput[];
    NOT?: api_callbackWhereInput | api_callbackWhereInput[];
    id?: StringFilter<'api_callback'> | string;
    source?: StringFilter<'api_callback'> | string;
    event_type?: StringFilter<'api_callback'> | string;
    payload?: JsonFilter<'api_callback'>;
    headers?: JsonNullableFilter<'api_callback'>;
    status_code?: IntNullableFilter<'api_callback'> | number | null;
    created_at?: DateTimeFilter<'api_callback'> | Date | string;
    updated_at?: DateTimeFilter<'api_callback'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'api_callback'> | Date | string | null;
  };

  export type api_callbackOrderByWithRelationInput = {
    id?: SortOrder;
    source?: SortOrder;
    event_type?: SortOrder;
    payload?: SortOrder;
    headers?: SortOrderInput | SortOrder;
    status_code?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
  };

  export type api_callbackWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: api_callbackWhereInput | api_callbackWhereInput[];
      OR?: api_callbackWhereInput[];
      NOT?: api_callbackWhereInput | api_callbackWhereInput[];
      source?: StringFilter<'api_callback'> | string;
      event_type?: StringFilter<'api_callback'> | string;
      payload?: JsonFilter<'api_callback'>;
      headers?: JsonNullableFilter<'api_callback'>;
      status_code?: IntNullableFilter<'api_callback'> | number | null;
      created_at?: DateTimeFilter<'api_callback'> | Date | string;
      updated_at?: DateTimeFilter<'api_callback'> | Date | string;
      deleted_at?:
        | DateTimeNullableFilter<'api_callback'>
        | Date
        | string
        | null;
    },
    'id'
  >;

  export type api_callbackOrderByWithAggregationInput = {
    id?: SortOrder;
    source?: SortOrder;
    event_type?: SortOrder;
    payload?: SortOrder;
    headers?: SortOrderInput | SortOrder;
    status_code?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    _count?: api_callbackCountOrderByAggregateInput;
    _avg?: api_callbackAvgOrderByAggregateInput;
    _max?: api_callbackMaxOrderByAggregateInput;
    _min?: api_callbackMinOrderByAggregateInput;
    _sum?: api_callbackSumOrderByAggregateInput;
  };

  export type api_callbackScalarWhereWithAggregatesInput = {
    AND?:
      | api_callbackScalarWhereWithAggregatesInput
      | api_callbackScalarWhereWithAggregatesInput[];
    OR?: api_callbackScalarWhereWithAggregatesInput[];
    NOT?:
      | api_callbackScalarWhereWithAggregatesInput
      | api_callbackScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'api_callback'> | string;
    source?: StringWithAggregatesFilter<'api_callback'> | string;
    event_type?: StringWithAggregatesFilter<'api_callback'> | string;
    payload?: JsonWithAggregatesFilter<'api_callback'>;
    headers?: JsonNullableWithAggregatesFilter<'api_callback'>;
    status_code?:
      | IntNullableWithAggregatesFilter<'api_callback'>
      | number
      | null;
    created_at?: DateTimeWithAggregatesFilter<'api_callback'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'api_callback'> | Date | string;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'api_callback'>
      | Date
      | string
      | null;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileCreateNestedOneWithoutUserInput;
    donations?: donationCreateNestedManyWithoutDonorInput;
    received_donations?: donationCreateNestedManyWithoutRecipientInput;
    overlays?: overlayCreateNestedManyWithoutUserInput;
    goals?: goalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileUncheckedCreateNestedOneWithoutUserInput;
    donations?: donationUncheckedCreateNestedManyWithoutDonorInput;
    received_donations?: donationUncheckedCreateNestedManyWithoutRecipientInput;
    overlays?: overlayUncheckedCreateNestedManyWithoutUserInput;
    goals?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUpdateOneWithoutUserNestedInput;
    donations?: donationUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUpdateManyWithoutUserNestedInput;
    goals?: goalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput;
    donations?: donationUncheckedUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUncheckedUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUncheckedUpdateManyWithoutUserNestedInput;
    goals?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type profileCreateInput = {
    id?: string;
    bio?: string | null;
    xendit_api_key?: string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    user: userCreateNestedOneWithoutProfileInput;
  };

  export type profileUncheckedCreateInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    xendit_api_key?: string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type profileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    xendit_api_key?: NullableStringFieldUpdateOperationsInput | string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: userUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type profileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    xendit_api_key?: NullableStringFieldUpdateOperationsInput | string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type profileCreateManyInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    xendit_api_key?: string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type profileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    xendit_api_key?: NullableStringFieldUpdateOperationsInput | string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type profileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    xendit_api_key?: NullableStringFieldUpdateOperationsInput | string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type donationCreateInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    recipient: userCreateNestedOneWithoutReceived_donationsInput;
    donor?: userCreateNestedOneWithoutDonationsInput;
    transactions?: transactionCreateNestedManyWithoutDonationInput;
  };

  export type donationUncheckedCreateInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    recipient_id: string;
    donor_id?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    transactions?: transactionUncheckedCreateNestedManyWithoutDonationInput;
  };

  export type donationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recipient?: userUpdateOneRequiredWithoutReceived_donationsNestedInput;
    donor?: userUpdateOneWithoutDonationsNestedInput;
    transactions?: transactionUpdateManyWithoutDonationNestedInput;
  };

  export type donationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    recipient_id?: StringFieldUpdateOperationsInput | string;
    donor_id?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionUncheckedUpdateManyWithoutDonationNestedInput;
  };

  export type donationCreateManyInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    recipient_id: string;
    donor_id?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type donationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type donationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    recipient_id?: StringFieldUpdateOperationsInput | string;
    donor_id?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionCreateInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    status?: $Enums.transaction_status;
    reference_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    donation: donationCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionUncheckedCreateInput = {
    id?: string;
    donation_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    status?: $Enums.transaction_status;
    reference_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    donation?: donationUpdateOneRequiredWithoutTransactionsNestedInput;
  };

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    donation_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionCreateManyInput = {
    id?: string;
    donation_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    status?: $Enums.transaction_status;
    reference_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    donation_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type overlayCreateInput = {
    id?: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonNullValueInput | InputJsonValue;
    token: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    user: userCreateNestedOneWithoutOverlaysInput;
  };

  export type overlayUncheckedCreateInput = {
    id?: string;
    user_id: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonNullValueInput | InputJsonValue;
    token: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type overlayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: userUpdateOneRequiredWithoutOverlaysNestedInput;
  };

  export type overlayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type overlayCreateManyInput = {
    id?: string;
    user_id: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonNullValueInput | InputJsonValue;
    token: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type overlayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type overlayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalCreateInput = {
    id?: string;
    title: string;
    target_amount: Decimal | DecimalJsLike | number | string;
    current_amount?: Decimal | DecimalJsLike | number | string;
    start_date?: Date | string;
    end_date?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    user: userCreateNestedOneWithoutGoalsInput;
  };

  export type goalUncheckedCreateInput = {
    id?: string;
    user_id: string;
    title: string;
    target_amount: Decimal | DecimalJsLike | number | string;
    current_amount?: Decimal | DecimalJsLike | number | string;
    start_date?: Date | string;
    end_date?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type goalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    user?: userUpdateOneRequiredWithoutGoalsNestedInput;
  };

  export type goalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalCreateManyInput = {
    id?: string;
    user_id: string;
    title: string;
    target_amount: Decimal | DecimalJsLike | number | string;
    current_amount?: Decimal | DecimalJsLike | number | string;
    start_date?: Date | string;
    end_date?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type goalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_queueCreateInput = {
    id?: string;
    url: string;
    method?: string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.queue_status;
    type: string;
    retry_count?: number;
    max_retries?: number;
    last_error?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type api_queueUncheckedCreateInput = {
    id?: string;
    url: string;
    method?: string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.queue_status;
    type: string;
    retry_count?: number;
    max_retries?: number;
    last_error?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type api_queueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    method?: StringFieldUpdateOperationsInput | string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: Enumqueue_statusFieldUpdateOperationsInput | $Enums.queue_status;
    type?: StringFieldUpdateOperationsInput | string;
    retry_count?: IntFieldUpdateOperationsInput | number;
    max_retries?: IntFieldUpdateOperationsInput | number;
    last_error?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_queueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    method?: StringFieldUpdateOperationsInput | string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: Enumqueue_statusFieldUpdateOperationsInput | $Enums.queue_status;
    type?: StringFieldUpdateOperationsInput | string;
    retry_count?: IntFieldUpdateOperationsInput | number;
    max_retries?: IntFieldUpdateOperationsInput | number;
    last_error?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_queueCreateManyInput = {
    id?: string;
    url: string;
    method?: string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.queue_status;
    type: string;
    retry_count?: number;
    max_retries?: number;
    last_error?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type api_queueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    method?: StringFieldUpdateOperationsInput | string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: Enumqueue_statusFieldUpdateOperationsInput | $Enums.queue_status;
    type?: StringFieldUpdateOperationsInput | string;
    retry_count?: IntFieldUpdateOperationsInput | number;
    max_retries?: IntFieldUpdateOperationsInput | number;
    last_error?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_queueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    method?: StringFieldUpdateOperationsInput | string;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    body?: NullableJsonNullValueInput | InputJsonValue;
    status?: Enumqueue_statusFieldUpdateOperationsInput | $Enums.queue_status;
    type?: StringFieldUpdateOperationsInput | string;
    retry_count?: IntFieldUpdateOperationsInput | number;
    max_retries?: IntFieldUpdateOperationsInput | number;
    last_error?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_callbackCreateInput = {
    id?: string;
    source: string;
    event_type: string;
    payload: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type api_callbackUncheckedCreateInput = {
    id?: string;
    source: string;
    event_type: string;
    payload: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type api_callbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    source?: StringFieldUpdateOperationsInput | string;
    event_type?: StringFieldUpdateOperationsInput | string;
    payload?: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_callbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    source?: StringFieldUpdateOperationsInput | string;
    event_type?: StringFieldUpdateOperationsInput | string;
    payload?: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_callbackCreateManyInput = {
    id?: string;
    source: string;
    event_type: string;
    payload: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type api_callbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    source?: StringFieldUpdateOperationsInput | string;
    event_type?: StringFieldUpdateOperationsInput | string;
    payload?: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type api_callbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    source?: StringFieldUpdateOperationsInput | string;
    event_type?: StringFieldUpdateOperationsInput | string;
    payload?: JsonNullValueInput | InputJsonValue;
    headers?: NullableJsonNullValueInput | InputJsonValue;
    status_code?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ProfileNullableScalarRelationFilter = {
    is?: profileWhereInput | null;
    isNot?: profileWhereInput | null;
  };

  export type DonationListRelationFilter = {
    every?: donationWhereInput;
    some?: donationWhereInput;
    none?: donationWhereInput;
  };

  export type OverlayListRelationFilter = {
    every?: overlayWhereInput;
    some?: overlayWhereInput;
    none?: overlayWhereInput;
  };

  export type GoalListRelationFilter = {
    every?: goalWhereInput;
    some?: goalWhereInput;
    none?: goalWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type donationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type overlayOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type goalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    display_name?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    display_name?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    display_name?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UserScalarRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrder;
    xendit_api_key?: SortOrder;
    notification_settings?: SortOrder;
    social_links?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrder;
    xendit_api_key?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    bio?: SortOrder;
    xendit_api_key?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          'path'
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type Enumdonation_statusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.donation_status
      | Enumdonation_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumdonation_statusFilter<$PrismaModel>
      | $Enums.donation_status;
  };

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null;
    isNot?: userWhereInput | null;
  };

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput;
    some?: transactionWhereInput;
    none?: transactionWhereInput;
  };

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type donationCountOrderByAggregateInput = {
    id?: SortOrder;
    external_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    donor_name?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    payment_url?: SortOrder;
    payment_method?: SortOrder;
    recipient_id?: SortOrder;
    donor_id?: SortOrder;
    media_type?: SortOrder;
    media_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type donationAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type donationMaxOrderByAggregateInput = {
    id?: SortOrder;
    external_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    donor_name?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    payment_url?: SortOrder;
    payment_method?: SortOrder;
    recipient_id?: SortOrder;
    donor_id?: SortOrder;
    media_type?: SortOrder;
    media_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type donationMinOrderByAggregateInput = {
    id?: SortOrder;
    external_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    donor_name?: SortOrder;
    message?: SortOrder;
    status?: SortOrder;
    payment_url?: SortOrder;
    payment_method?: SortOrder;
    recipient_id?: SortOrder;
    donor_id?: SortOrder;
    media_type?: SortOrder;
    media_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type donationSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type Enumdonation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.donation_status
      | Enumdonation_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumdonation_statusWithAggregatesFilter<$PrismaModel>
      | $Enums.donation_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumdonation_statusFilter<$PrismaModel>;
    _max?: NestedEnumdonation_statusFilter<$PrismaModel>;
  };

  export type Enumtransaction_statusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.transaction_status
      | Enumtransaction_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_status[]
      | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_status[]
      | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_statusFilter<$PrismaModel>
      | $Enums.transaction_status;
  };

  export type DonationScalarRelationFilter = {
    is?: donationWhereInput;
    isNot?: donationWhereInput;
  };

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder;
    donation_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    status?: SortOrder;
    reference_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type transactionAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder;
    donation_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    status?: SortOrder;
    reference_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder;
    donation_id?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    status?: SortOrder;
    reference_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type transactionSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type Enumtransaction_statusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.transaction_status
        | Enumtransaction_statusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.transaction_status[]
        | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.transaction_status[]
        | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel>
        | $Enums.transaction_status;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumtransaction_statusFilter<$PrismaModel>;
      _max?: NestedEnumtransaction_statusFilter<$PrismaModel>;
    };

  export type Enumoverlay_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.overlay_type | Enumoverlay_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.overlay_type[]
      | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.overlay_type[]
      | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
    not?: NestedEnumoverlay_typeFilter<$PrismaModel> | $Enums.overlay_type;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type overlayCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type?: SortOrder;
    name?: SortOrder;
    config?: SortOrder;
    token?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type overlayMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type?: SortOrder;
    name?: SortOrder;
    token?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type overlayMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type?: SortOrder;
    name?: SortOrder;
    token?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type Enumoverlay_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.overlay_type | Enumoverlay_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.overlay_type[]
      | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.overlay_type[]
      | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumoverlay_typeWithAggregatesFilter<$PrismaModel>
      | $Enums.overlay_type;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumoverlay_typeFilter<$PrismaModel>;
    _max?: NestedEnumoverlay_typeFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type goalCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    target_amount?: SortOrder;
    current_amount?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type goalAvgOrderByAggregateInput = {
    target_amount?: SortOrder;
    current_amount?: SortOrder;
  };

  export type goalMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    target_amount?: SortOrder;
    current_amount?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type goalMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    target_amount?: SortOrder;
    current_amount?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type goalSumOrderByAggregateInput = {
    target_amount?: SortOrder;
    current_amount?: SortOrder;
  };

  export type Enumqueue_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.queue_status | Enumqueue_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.queue_status[]
      | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.queue_status[]
      | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
    not?: NestedEnumqueue_statusFilter<$PrismaModel> | $Enums.queue_status;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type api_queueCountOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    method?: SortOrder;
    headers?: SortOrder;
    body?: SortOrder;
    status?: SortOrder;
    type?: SortOrder;
    retry_count?: SortOrder;
    max_retries?: SortOrder;
    last_error?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type api_queueAvgOrderByAggregateInput = {
    retry_count?: SortOrder;
    max_retries?: SortOrder;
  };

  export type api_queueMaxOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    method?: SortOrder;
    status?: SortOrder;
    type?: SortOrder;
    retry_count?: SortOrder;
    max_retries?: SortOrder;
    last_error?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type api_queueMinOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    method?: SortOrder;
    status?: SortOrder;
    type?: SortOrder;
    retry_count?: SortOrder;
    max_retries?: SortOrder;
    last_error?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type api_queueSumOrderByAggregateInput = {
    retry_count?: SortOrder;
    max_retries?: SortOrder;
  };

  export type Enumqueue_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.queue_status | Enumqueue_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.queue_status[]
      | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.queue_status[]
      | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumqueue_statusWithAggregatesFilter<$PrismaModel>
      | $Enums.queue_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumqueue_statusFilter<$PrismaModel>;
    _max?: NestedEnumqueue_statusFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type api_callbackCountOrderByAggregateInput = {
    id?: SortOrder;
    source?: SortOrder;
    event_type?: SortOrder;
    payload?: SortOrder;
    headers?: SortOrder;
    status_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type api_callbackAvgOrderByAggregateInput = {
    status_code?: SortOrder;
  };

  export type api_callbackMaxOrderByAggregateInput = {
    id?: SortOrder;
    source?: SortOrder;
    event_type?: SortOrder;
    status_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type api_callbackMinOrderByAggregateInput = {
    id?: SortOrder;
    source?: SortOrder;
    event_type?: SortOrder;
    status_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    deleted_at?: SortOrder;
  };

  export type api_callbackSumOrderByAggregateInput = {
    status_code?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type profileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      profileCreateWithoutUserInput,
      profileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: profileCreateOrConnectWithoutUserInput;
    connect?: profileWhereUniqueInput;
  };

  export type donationCreateNestedManyWithoutDonorInput = {
    create?:
      | XOR<
          donationCreateWithoutDonorInput,
          donationUncheckedCreateWithoutDonorInput
        >
      | donationCreateWithoutDonorInput[]
      | donationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutDonorInput
      | donationCreateOrConnectWithoutDonorInput[];
    createMany?: donationCreateManyDonorInputEnvelope;
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
  };

  export type donationCreateNestedManyWithoutRecipientInput = {
    create?:
      | XOR<
          donationCreateWithoutRecipientInput,
          donationUncheckedCreateWithoutRecipientInput
        >
      | donationCreateWithoutRecipientInput[]
      | donationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutRecipientInput
      | donationCreateOrConnectWithoutRecipientInput[];
    createMany?: donationCreateManyRecipientInputEnvelope;
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
  };

  export type overlayCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          overlayCreateWithoutUserInput,
          overlayUncheckedCreateWithoutUserInput
        >
      | overlayCreateWithoutUserInput[]
      | overlayUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | overlayCreateOrConnectWithoutUserInput
      | overlayCreateOrConnectWithoutUserInput[];
    createMany?: overlayCreateManyUserInputEnvelope;
    connect?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
  };

  export type goalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | goalCreateOrConnectWithoutUserInput
      | goalCreateOrConnectWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
  };

  export type profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      profileCreateWithoutUserInput,
      profileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: profileCreateOrConnectWithoutUserInput;
    connect?: profileWhereUniqueInput;
  };

  export type donationUncheckedCreateNestedManyWithoutDonorInput = {
    create?:
      | XOR<
          donationCreateWithoutDonorInput,
          donationUncheckedCreateWithoutDonorInput
        >
      | donationCreateWithoutDonorInput[]
      | donationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutDonorInput
      | donationCreateOrConnectWithoutDonorInput[];
    createMany?: donationCreateManyDonorInputEnvelope;
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
  };

  export type donationUncheckedCreateNestedManyWithoutRecipientInput = {
    create?:
      | XOR<
          donationCreateWithoutRecipientInput,
          donationUncheckedCreateWithoutRecipientInput
        >
      | donationCreateWithoutRecipientInput[]
      | donationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutRecipientInput
      | donationCreateOrConnectWithoutRecipientInput[];
    createMany?: donationCreateManyRecipientInputEnvelope;
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
  };

  export type overlayUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          overlayCreateWithoutUserInput,
          overlayUncheckedCreateWithoutUserInput
        >
      | overlayCreateWithoutUserInput[]
      | overlayUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | overlayCreateOrConnectWithoutUserInput
      | overlayCreateOrConnectWithoutUserInput[];
    createMany?: overlayCreateManyUserInputEnvelope;
    connect?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
  };

  export type goalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | goalCreateOrConnectWithoutUserInput
      | goalCreateOrConnectWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type profileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      profileCreateWithoutUserInput,
      profileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: profileCreateOrConnectWithoutUserInput;
    upsert?: profileUpsertWithoutUserInput;
    disconnect?: profileWhereInput | boolean;
    delete?: profileWhereInput | boolean;
    connect?: profileWhereUniqueInput;
    update?: XOR<
      XOR<
        profileUpdateToOneWithWhereWithoutUserInput,
        profileUpdateWithoutUserInput
      >,
      profileUncheckedUpdateWithoutUserInput
    >;
  };

  export type donationUpdateManyWithoutDonorNestedInput = {
    create?:
      | XOR<
          donationCreateWithoutDonorInput,
          donationUncheckedCreateWithoutDonorInput
        >
      | donationCreateWithoutDonorInput[]
      | donationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutDonorInput
      | donationCreateOrConnectWithoutDonorInput[];
    upsert?:
      | donationUpsertWithWhereUniqueWithoutDonorInput
      | donationUpsertWithWhereUniqueWithoutDonorInput[];
    createMany?: donationCreateManyDonorInputEnvelope;
    set?: donationWhereUniqueInput | donationWhereUniqueInput[];
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[];
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    update?:
      | donationUpdateWithWhereUniqueWithoutDonorInput
      | donationUpdateWithWhereUniqueWithoutDonorInput[];
    updateMany?:
      | donationUpdateManyWithWhereWithoutDonorInput
      | donationUpdateManyWithWhereWithoutDonorInput[];
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[];
  };

  export type donationUpdateManyWithoutRecipientNestedInput = {
    create?:
      | XOR<
          donationCreateWithoutRecipientInput,
          donationUncheckedCreateWithoutRecipientInput
        >
      | donationCreateWithoutRecipientInput[]
      | donationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutRecipientInput
      | donationCreateOrConnectWithoutRecipientInput[];
    upsert?:
      | donationUpsertWithWhereUniqueWithoutRecipientInput
      | donationUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: donationCreateManyRecipientInputEnvelope;
    set?: donationWhereUniqueInput | donationWhereUniqueInput[];
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[];
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    update?:
      | donationUpdateWithWhereUniqueWithoutRecipientInput
      | donationUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?:
      | donationUpdateManyWithWhereWithoutRecipientInput
      | donationUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[];
  };

  export type overlayUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          overlayCreateWithoutUserInput,
          overlayUncheckedCreateWithoutUserInput
        >
      | overlayCreateWithoutUserInput[]
      | overlayUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | overlayCreateOrConnectWithoutUserInput
      | overlayCreateOrConnectWithoutUserInput[];
    upsert?:
      | overlayUpsertWithWhereUniqueWithoutUserInput
      | overlayUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: overlayCreateManyUserInputEnvelope;
    set?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    disconnect?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    delete?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    connect?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    update?:
      | overlayUpdateWithWhereUniqueWithoutUserInput
      | overlayUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | overlayUpdateManyWithWhereWithoutUserInput
      | overlayUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: overlayScalarWhereInput | overlayScalarWhereInput[];
  };

  export type goalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | goalCreateOrConnectWithoutUserInput
      | goalCreateOrConnectWithoutUserInput[];
    upsert?:
      | goalUpsertWithWhereUniqueWithoutUserInput
      | goalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    set?: goalWhereUniqueInput | goalWhereUniqueInput[];
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[];
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    update?:
      | goalUpdateWithWhereUniqueWithoutUserInput
      | goalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | goalUpdateManyWithWhereWithoutUserInput
      | goalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[];
  };

  export type profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      profileCreateWithoutUserInput,
      profileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: profileCreateOrConnectWithoutUserInput;
    upsert?: profileUpsertWithoutUserInput;
    disconnect?: profileWhereInput | boolean;
    delete?: profileWhereInput | boolean;
    connect?: profileWhereUniqueInput;
    update?: XOR<
      XOR<
        profileUpdateToOneWithWhereWithoutUserInput,
        profileUpdateWithoutUserInput
      >,
      profileUncheckedUpdateWithoutUserInput
    >;
  };

  export type donationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?:
      | XOR<
          donationCreateWithoutDonorInput,
          donationUncheckedCreateWithoutDonorInput
        >
      | donationCreateWithoutDonorInput[]
      | donationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutDonorInput
      | donationCreateOrConnectWithoutDonorInput[];
    upsert?:
      | donationUpsertWithWhereUniqueWithoutDonorInput
      | donationUpsertWithWhereUniqueWithoutDonorInput[];
    createMany?: donationCreateManyDonorInputEnvelope;
    set?: donationWhereUniqueInput | donationWhereUniqueInput[];
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[];
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    update?:
      | donationUpdateWithWhereUniqueWithoutDonorInput
      | donationUpdateWithWhereUniqueWithoutDonorInput[];
    updateMany?:
      | donationUpdateManyWithWhereWithoutDonorInput
      | donationUpdateManyWithWhereWithoutDonorInput[];
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[];
  };

  export type donationUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?:
      | XOR<
          donationCreateWithoutRecipientInput,
          donationUncheckedCreateWithoutRecipientInput
        >
      | donationCreateWithoutRecipientInput[]
      | donationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?:
      | donationCreateOrConnectWithoutRecipientInput
      | donationCreateOrConnectWithoutRecipientInput[];
    upsert?:
      | donationUpsertWithWhereUniqueWithoutRecipientInput
      | donationUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: donationCreateManyRecipientInputEnvelope;
    set?: donationWhereUniqueInput | donationWhereUniqueInput[];
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[];
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[];
    update?:
      | donationUpdateWithWhereUniqueWithoutRecipientInput
      | donationUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?:
      | donationUpdateManyWithWhereWithoutRecipientInput
      | donationUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[];
  };

  export type overlayUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          overlayCreateWithoutUserInput,
          overlayUncheckedCreateWithoutUserInput
        >
      | overlayCreateWithoutUserInput[]
      | overlayUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | overlayCreateOrConnectWithoutUserInput
      | overlayCreateOrConnectWithoutUserInput[];
    upsert?:
      | overlayUpsertWithWhereUniqueWithoutUserInput
      | overlayUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: overlayCreateManyUserInputEnvelope;
    set?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    disconnect?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    delete?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    connect?: overlayWhereUniqueInput | overlayWhereUniqueInput[];
    update?:
      | overlayUpdateWithWhereUniqueWithoutUserInput
      | overlayUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | overlayUpdateManyWithWhereWithoutUserInput
      | overlayUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: overlayScalarWhereInput | overlayScalarWhereInput[];
  };

  export type goalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | goalCreateOrConnectWithoutUserInput
      | goalCreateOrConnectWithoutUserInput[];
    upsert?:
      | goalUpsertWithWhereUniqueWithoutUserInput
      | goalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    set?: goalWhereUniqueInput | goalWhereUniqueInput[];
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[];
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    update?:
      | goalUpdateWithWhereUniqueWithoutUserInput
      | goalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | goalUpdateManyWithWhereWithoutUserInput
      | goalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      userCreateWithoutProfileInput,
      userUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutProfileInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<
      userCreateWithoutProfileInput,
      userUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutProfileInput;
    upsert?: userUpsertWithoutProfileInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutProfileInput,
        userUpdateWithoutProfileInput
      >,
      userUncheckedUpdateWithoutProfileInput
    >;
  };

  export type userCreateNestedOneWithoutReceived_donationsInput = {
    create?: XOR<
      userCreateWithoutReceived_donationsInput,
      userUncheckedCreateWithoutReceived_donationsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutReceived_donationsInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutDonationsInput = {
    create?: XOR<
      userCreateWithoutDonationsInput,
      userUncheckedCreateWithoutDonationsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutDonationsInput;
    connect?: userWhereUniqueInput;
  };

  export type transactionCreateNestedManyWithoutDonationInput = {
    create?:
      | XOR<
          transactionCreateWithoutDonationInput,
          transactionUncheckedCreateWithoutDonationInput
        >
      | transactionCreateWithoutDonationInput[]
      | transactionUncheckedCreateWithoutDonationInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutDonationInput
      | transactionCreateOrConnectWithoutDonationInput[];
    createMany?: transactionCreateManyDonationInputEnvelope;
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
  };

  export type transactionUncheckedCreateNestedManyWithoutDonationInput = {
    create?:
      | XOR<
          transactionCreateWithoutDonationInput,
          transactionUncheckedCreateWithoutDonationInput
        >
      | transactionCreateWithoutDonationInput[]
      | transactionUncheckedCreateWithoutDonationInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutDonationInput
      | transactionCreateOrConnectWithoutDonationInput[];
    createMany?: transactionCreateManyDonationInputEnvelope;
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type Enumdonation_statusFieldUpdateOperationsInput = {
    set?: $Enums.donation_status;
  };

  export type userUpdateOneRequiredWithoutReceived_donationsNestedInput = {
    create?: XOR<
      userCreateWithoutReceived_donationsInput,
      userUncheckedCreateWithoutReceived_donationsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutReceived_donationsInput;
    upsert?: userUpsertWithoutReceived_donationsInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutReceived_donationsInput,
        userUpdateWithoutReceived_donationsInput
      >,
      userUncheckedUpdateWithoutReceived_donationsInput
    >;
  };

  export type userUpdateOneWithoutDonationsNestedInput = {
    create?: XOR<
      userCreateWithoutDonationsInput,
      userUncheckedCreateWithoutDonationsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutDonationsInput;
    upsert?: userUpsertWithoutDonationsInput;
    disconnect?: userWhereInput | boolean;
    delete?: userWhereInput | boolean;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutDonationsInput,
        userUpdateWithoutDonationsInput
      >,
      userUncheckedUpdateWithoutDonationsInput
    >;
  };

  export type transactionUpdateManyWithoutDonationNestedInput = {
    create?:
      | XOR<
          transactionCreateWithoutDonationInput,
          transactionUncheckedCreateWithoutDonationInput
        >
      | transactionCreateWithoutDonationInput[]
      | transactionUncheckedCreateWithoutDonationInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutDonationInput
      | transactionCreateOrConnectWithoutDonationInput[];
    upsert?:
      | transactionUpsertWithWhereUniqueWithoutDonationInput
      | transactionUpsertWithWhereUniqueWithoutDonationInput[];
    createMany?: transactionCreateManyDonationInputEnvelope;
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    update?:
      | transactionUpdateWithWhereUniqueWithoutDonationInput
      | transactionUpdateWithWhereUniqueWithoutDonationInput[];
    updateMany?:
      | transactionUpdateManyWithWhereWithoutDonationInput
      | transactionUpdateManyWithWhereWithoutDonationInput[];
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[];
  };

  export type transactionUncheckedUpdateManyWithoutDonationNestedInput = {
    create?:
      | XOR<
          transactionCreateWithoutDonationInput,
          transactionUncheckedCreateWithoutDonationInput
        >
      | transactionCreateWithoutDonationInput[]
      | transactionUncheckedCreateWithoutDonationInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutDonationInput
      | transactionCreateOrConnectWithoutDonationInput[];
    upsert?:
      | transactionUpsertWithWhereUniqueWithoutDonationInput
      | transactionUpsertWithWhereUniqueWithoutDonationInput[];
    createMany?: transactionCreateManyDonationInputEnvelope;
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    update?:
      | transactionUpdateWithWhereUniqueWithoutDonationInput
      | transactionUpdateWithWhereUniqueWithoutDonationInput[];
    updateMany?:
      | transactionUpdateManyWithWhereWithoutDonationInput
      | transactionUpdateManyWithWhereWithoutDonationInput[];
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[];
  };

  export type donationCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      donationCreateWithoutTransactionsInput,
      donationUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: donationCreateOrConnectWithoutTransactionsInput;
    connect?: donationWhereUniqueInput;
  };

  export type Enumtransaction_statusFieldUpdateOperationsInput = {
    set?: $Enums.transaction_status;
  };

  export type donationUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<
      donationCreateWithoutTransactionsInput,
      donationUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: donationCreateOrConnectWithoutTransactionsInput;
    upsert?: donationUpsertWithoutTransactionsInput;
    connect?: donationWhereUniqueInput;
    update?: XOR<
      XOR<
        donationUpdateToOneWithWhereWithoutTransactionsInput,
        donationUpdateWithoutTransactionsInput
      >,
      donationUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type userCreateNestedOneWithoutOverlaysInput = {
    create?: XOR<
      userCreateWithoutOverlaysInput,
      userUncheckedCreateWithoutOverlaysInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutOverlaysInput;
    connect?: userWhereUniqueInput;
  };

  export type Enumoverlay_typeFieldUpdateOperationsInput = {
    set?: $Enums.overlay_type;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type userUpdateOneRequiredWithoutOverlaysNestedInput = {
    create?: XOR<
      userCreateWithoutOverlaysInput,
      userUncheckedCreateWithoutOverlaysInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutOverlaysInput;
    upsert?: userUpsertWithoutOverlaysInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutOverlaysInput,
        userUpdateWithoutOverlaysInput
      >,
      userUncheckedUpdateWithoutOverlaysInput
    >;
  };

  export type userCreateNestedOneWithoutGoalsInput = {
    create?: XOR<
      userCreateWithoutGoalsInput,
      userUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutGoalsInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<
      userCreateWithoutGoalsInput,
      userUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutGoalsInput;
    upsert?: userUpsertWithoutGoalsInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutGoalsInput,
        userUpdateWithoutGoalsInput
      >,
      userUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type Enumqueue_statusFieldUpdateOperationsInput = {
    set?: $Enums.queue_status;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedEnumdonation_statusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.donation_status
      | Enumdonation_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumdonation_statusFilter<$PrismaModel>
      | $Enums.donation_status;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedEnumdonation_statusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.donation_status
      | Enumdonation_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.donation_status[]
      | ListEnumdonation_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumdonation_statusWithAggregatesFilter<$PrismaModel>
      | $Enums.donation_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumdonation_statusFilter<$PrismaModel>;
    _max?: NestedEnumdonation_statusFilter<$PrismaModel>;
  };

  export type NestedEnumtransaction_statusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.transaction_status
      | Enumtransaction_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_status[]
      | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_status[]
      | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_statusFilter<$PrismaModel>
      | $Enums.transaction_status;
  };

  export type NestedEnumtransaction_statusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.transaction_status
      | Enumtransaction_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_status[]
      | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_status[]
      | ListEnumtransaction_statusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel>
      | $Enums.transaction_status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumtransaction_statusFilter<$PrismaModel>;
    _max?: NestedEnumtransaction_statusFilter<$PrismaModel>;
  };

  export type NestedEnumoverlay_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.overlay_type | Enumoverlay_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.overlay_type[]
      | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.overlay_type[]
      | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
    not?: NestedEnumoverlay_typeFilter<$PrismaModel> | $Enums.overlay_type;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumoverlay_typeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.overlay_type
        | Enumoverlay_typeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.overlay_type[]
        | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.overlay_type[]
        | ListEnumoverlay_typeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumoverlay_typeWithAggregatesFilter<$PrismaModel>
        | $Enums.overlay_type;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumoverlay_typeFilter<$PrismaModel>;
      _max?: NestedEnumoverlay_typeFilter<$PrismaModel>;
    };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumqueue_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.queue_status | Enumqueue_statusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.queue_status[]
      | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.queue_status[]
      | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
    not?: NestedEnumqueue_statusFilter<$PrismaModel> | $Enums.queue_status;
  };

  export type NestedEnumqueue_statusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.queue_status
        | Enumqueue_statusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.queue_status[]
        | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.queue_status[]
        | ListEnumqueue_statusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumqueue_statusWithAggregatesFilter<$PrismaModel>
        | $Enums.queue_status;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumqueue_statusFilter<$PrismaModel>;
      _max?: NestedEnumqueue_statusFilter<$PrismaModel>;
    };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type profileCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    xendit_api_key?: string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type profileUncheckedCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    xendit_api_key?: string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type profileCreateOrConnectWithoutUserInput = {
    where: profileWhereUniqueInput;
    create: XOR<
      profileCreateWithoutUserInput,
      profileUncheckedCreateWithoutUserInput
    >;
  };

  export type donationCreateWithoutDonorInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    recipient: userCreateNestedOneWithoutReceived_donationsInput;
    transactions?: transactionCreateNestedManyWithoutDonationInput;
  };

  export type donationUncheckedCreateWithoutDonorInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    recipient_id: string;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    transactions?: transactionUncheckedCreateNestedManyWithoutDonationInput;
  };

  export type donationCreateOrConnectWithoutDonorInput = {
    where: donationWhereUniqueInput;
    create: XOR<
      donationCreateWithoutDonorInput,
      donationUncheckedCreateWithoutDonorInput
    >;
  };

  export type donationCreateManyDonorInputEnvelope = {
    data: donationCreateManyDonorInput | donationCreateManyDonorInput[];
    skipDuplicates?: boolean;
  };

  export type donationCreateWithoutRecipientInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    donor?: userCreateNestedOneWithoutDonationsInput;
    transactions?: transactionCreateNestedManyWithoutDonationInput;
  };

  export type donationUncheckedCreateWithoutRecipientInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    donor_id?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    transactions?: transactionUncheckedCreateNestedManyWithoutDonationInput;
  };

  export type donationCreateOrConnectWithoutRecipientInput = {
    where: donationWhereUniqueInput;
    create: XOR<
      donationCreateWithoutRecipientInput,
      donationUncheckedCreateWithoutRecipientInput
    >;
  };

  export type donationCreateManyRecipientInputEnvelope = {
    data: donationCreateManyRecipientInput | donationCreateManyRecipientInput[];
    skipDuplicates?: boolean;
  };

  export type overlayCreateWithoutUserInput = {
    id?: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonNullValueInput | InputJsonValue;
    token: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type overlayUncheckedCreateWithoutUserInput = {
    id?: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonNullValueInput | InputJsonValue;
    token: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type overlayCreateOrConnectWithoutUserInput = {
    where: overlayWhereUniqueInput;
    create: XOR<
      overlayCreateWithoutUserInput,
      overlayUncheckedCreateWithoutUserInput
    >;
  };

  export type overlayCreateManyUserInputEnvelope = {
    data: overlayCreateManyUserInput | overlayCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type goalCreateWithoutUserInput = {
    id?: string;
    title: string;
    target_amount: Decimal | DecimalJsLike | number | string;
    current_amount?: Decimal | DecimalJsLike | number | string;
    start_date?: Date | string;
    end_date?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type goalUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    target_amount: Decimal | DecimalJsLike | number | string;
    current_amount?: Decimal | DecimalJsLike | number | string;
    start_date?: Date | string;
    end_date?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type goalCreateOrConnectWithoutUserInput = {
    where: goalWhereUniqueInput;
    create: XOR<
      goalCreateWithoutUserInput,
      goalUncheckedCreateWithoutUserInput
    >;
  };

  export type goalCreateManyUserInputEnvelope = {
    data: goalCreateManyUserInput | goalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type profileUpsertWithoutUserInput = {
    update: XOR<
      profileUpdateWithoutUserInput,
      profileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      profileCreateWithoutUserInput,
      profileUncheckedCreateWithoutUserInput
    >;
    where?: profileWhereInput;
  };

  export type profileUpdateToOneWithWhereWithoutUserInput = {
    where?: profileWhereInput;
    data: XOR<
      profileUpdateWithoutUserInput,
      profileUncheckedUpdateWithoutUserInput
    >;
  };

  export type profileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    xendit_api_key?: NullableStringFieldUpdateOperationsInput | string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type profileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    xendit_api_key?: NullableStringFieldUpdateOperationsInput | string | null;
    notification_settings?: NullableJsonNullValueInput | InputJsonValue;
    social_links?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type donationUpsertWithWhereUniqueWithoutDonorInput = {
    where: donationWhereUniqueInput;
    update: XOR<
      donationUpdateWithoutDonorInput,
      donationUncheckedUpdateWithoutDonorInput
    >;
    create: XOR<
      donationCreateWithoutDonorInput,
      donationUncheckedCreateWithoutDonorInput
    >;
  };

  export type donationUpdateWithWhereUniqueWithoutDonorInput = {
    where: donationWhereUniqueInput;
    data: XOR<
      donationUpdateWithoutDonorInput,
      donationUncheckedUpdateWithoutDonorInput
    >;
  };

  export type donationUpdateManyWithWhereWithoutDonorInput = {
    where: donationScalarWhereInput;
    data: XOR<
      donationUpdateManyMutationInput,
      donationUncheckedUpdateManyWithoutDonorInput
    >;
  };

  export type donationScalarWhereInput = {
    AND?: donationScalarWhereInput | donationScalarWhereInput[];
    OR?: donationScalarWhereInput[];
    NOT?: donationScalarWhereInput | donationScalarWhereInput[];
    id?: StringFilter<'donation'> | string;
    external_id?: StringFilter<'donation'> | string;
    amount?:
      | DecimalFilter<'donation'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFilter<'donation'> | string;
    donor_name?: StringFilter<'donation'> | string;
    message?: StringNullableFilter<'donation'> | string | null;
    status?: Enumdonation_statusFilter<'donation'> | $Enums.donation_status;
    payment_url?: StringNullableFilter<'donation'> | string | null;
    payment_method?: StringNullableFilter<'donation'> | string | null;
    recipient_id?: StringFilter<'donation'> | string;
    donor_id?: StringNullableFilter<'donation'> | string | null;
    media_type?: StringNullableFilter<'donation'> | string | null;
    media_url?: StringNullableFilter<'donation'> | string | null;
    created_at?: DateTimeFilter<'donation'> | Date | string;
    updated_at?: DateTimeFilter<'donation'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'donation'> | Date | string | null;
  };

  export type donationUpsertWithWhereUniqueWithoutRecipientInput = {
    where: donationWhereUniqueInput;
    update: XOR<
      donationUpdateWithoutRecipientInput,
      donationUncheckedUpdateWithoutRecipientInput
    >;
    create: XOR<
      donationCreateWithoutRecipientInput,
      donationUncheckedCreateWithoutRecipientInput
    >;
  };

  export type donationUpdateWithWhereUniqueWithoutRecipientInput = {
    where: donationWhereUniqueInput;
    data: XOR<
      donationUpdateWithoutRecipientInput,
      donationUncheckedUpdateWithoutRecipientInput
    >;
  };

  export type donationUpdateManyWithWhereWithoutRecipientInput = {
    where: donationScalarWhereInput;
    data: XOR<
      donationUpdateManyMutationInput,
      donationUncheckedUpdateManyWithoutRecipientInput
    >;
  };

  export type overlayUpsertWithWhereUniqueWithoutUserInput = {
    where: overlayWhereUniqueInput;
    update: XOR<
      overlayUpdateWithoutUserInput,
      overlayUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      overlayCreateWithoutUserInput,
      overlayUncheckedCreateWithoutUserInput
    >;
  };

  export type overlayUpdateWithWhereUniqueWithoutUserInput = {
    where: overlayWhereUniqueInput;
    data: XOR<
      overlayUpdateWithoutUserInput,
      overlayUncheckedUpdateWithoutUserInput
    >;
  };

  export type overlayUpdateManyWithWhereWithoutUserInput = {
    where: overlayScalarWhereInput;
    data: XOR<
      overlayUpdateManyMutationInput,
      overlayUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type overlayScalarWhereInput = {
    AND?: overlayScalarWhereInput | overlayScalarWhereInput[];
    OR?: overlayScalarWhereInput[];
    NOT?: overlayScalarWhereInput | overlayScalarWhereInput[];
    id?: StringFilter<'overlay'> | string;
    user_id?: StringFilter<'overlay'> | string;
    type?: Enumoverlay_typeFilter<'overlay'> | $Enums.overlay_type;
    name?: StringFilter<'overlay'> | string;
    config?: JsonFilter<'overlay'>;
    token?: StringFilter<'overlay'> | string;
    is_active?: BoolFilter<'overlay'> | boolean;
    created_at?: DateTimeFilter<'overlay'> | Date | string;
    updated_at?: DateTimeFilter<'overlay'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'overlay'> | Date | string | null;
  };

  export type goalUpsertWithWhereUniqueWithoutUserInput = {
    where: goalWhereUniqueInput;
    update: XOR<
      goalUpdateWithoutUserInput,
      goalUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      goalCreateWithoutUserInput,
      goalUncheckedCreateWithoutUserInput
    >;
  };

  export type goalUpdateWithWhereUniqueWithoutUserInput = {
    where: goalWhereUniqueInput;
    data: XOR<goalUpdateWithoutUserInput, goalUncheckedUpdateWithoutUserInput>;
  };

  export type goalUpdateManyWithWhereWithoutUserInput = {
    where: goalScalarWhereInput;
    data: XOR<
      goalUpdateManyMutationInput,
      goalUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type goalScalarWhereInput = {
    AND?: goalScalarWhereInput | goalScalarWhereInput[];
    OR?: goalScalarWhereInput[];
    NOT?: goalScalarWhereInput | goalScalarWhereInput[];
    id?: StringFilter<'goal'> | string;
    user_id?: StringFilter<'goal'> | string;
    title?: StringFilter<'goal'> | string;
    target_amount?:
      | DecimalFilter<'goal'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFilter<'goal'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFilter<'goal'> | Date | string;
    end_date?: DateTimeNullableFilter<'goal'> | Date | string | null;
    is_active?: BoolFilter<'goal'> | boolean;
    created_at?: DateTimeFilter<'goal'> | Date | string;
    updated_at?: DateTimeFilter<'goal'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'goal'> | Date | string | null;
  };

  export type userCreateWithoutProfileInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    donations?: donationCreateNestedManyWithoutDonorInput;
    received_donations?: donationCreateNestedManyWithoutRecipientInput;
    overlays?: overlayCreateNestedManyWithoutUserInput;
    goals?: goalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProfileInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    donations?: donationUncheckedCreateNestedManyWithoutDonorInput;
    received_donations?: donationUncheckedCreateNestedManyWithoutRecipientInput;
    overlays?: overlayUncheckedCreateNestedManyWithoutUserInput;
    goals?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProfileInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutProfileInput,
      userUncheckedCreateWithoutProfileInput
    >;
  };

  export type userUpsertWithoutProfileInput = {
    update: XOR<
      userUpdateWithoutProfileInput,
      userUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      userCreateWithoutProfileInput,
      userUncheckedCreateWithoutProfileInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProfileInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutProfileInput,
      userUncheckedUpdateWithoutProfileInput
    >;
  };

  export type userUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    donations?: donationUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUpdateManyWithoutUserNestedInput;
    goals?: goalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    donations?: donationUncheckedUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUncheckedUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUncheckedUpdateManyWithoutUserNestedInput;
    goals?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutReceived_donationsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileCreateNestedOneWithoutUserInput;
    donations?: donationCreateNestedManyWithoutDonorInput;
    overlays?: overlayCreateNestedManyWithoutUserInput;
    goals?: goalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReceived_donationsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileUncheckedCreateNestedOneWithoutUserInput;
    donations?: donationUncheckedCreateNestedManyWithoutDonorInput;
    overlays?: overlayUncheckedCreateNestedManyWithoutUserInput;
    goals?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReceived_donationsInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutReceived_donationsInput,
      userUncheckedCreateWithoutReceived_donationsInput
    >;
  };

  export type userCreateWithoutDonationsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileCreateNestedOneWithoutUserInput;
    received_donations?: donationCreateNestedManyWithoutRecipientInput;
    overlays?: overlayCreateNestedManyWithoutUserInput;
    goals?: goalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDonationsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileUncheckedCreateNestedOneWithoutUserInput;
    received_donations?: donationUncheckedCreateNestedManyWithoutRecipientInput;
    overlays?: overlayUncheckedCreateNestedManyWithoutUserInput;
    goals?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDonationsInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutDonationsInput,
      userUncheckedCreateWithoutDonationsInput
    >;
  };

  export type transactionCreateWithoutDonationInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    status?: $Enums.transaction_status;
    reference_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type transactionUncheckedCreateWithoutDonationInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    status?: $Enums.transaction_status;
    reference_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type transactionCreateOrConnectWithoutDonationInput = {
    where: transactionWhereUniqueInput;
    create: XOR<
      transactionCreateWithoutDonationInput,
      transactionUncheckedCreateWithoutDonationInput
    >;
  };

  export type transactionCreateManyDonationInputEnvelope = {
    data:
      | transactionCreateManyDonationInput
      | transactionCreateManyDonationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutReceived_donationsInput = {
    update: XOR<
      userUpdateWithoutReceived_donationsInput,
      userUncheckedUpdateWithoutReceived_donationsInput
    >;
    create: XOR<
      userCreateWithoutReceived_donationsInput,
      userUncheckedCreateWithoutReceived_donationsInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReceived_donationsInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutReceived_donationsInput,
      userUncheckedUpdateWithoutReceived_donationsInput
    >;
  };

  export type userUpdateWithoutReceived_donationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUpdateOneWithoutUserNestedInput;
    donations?: donationUpdateManyWithoutDonorNestedInput;
    overlays?: overlayUpdateManyWithoutUserNestedInput;
    goals?: goalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReceived_donationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput;
    donations?: donationUncheckedUpdateManyWithoutDonorNestedInput;
    overlays?: overlayUncheckedUpdateManyWithoutUserNestedInput;
    goals?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutDonationsInput = {
    update: XOR<
      userUpdateWithoutDonationsInput,
      userUncheckedUpdateWithoutDonationsInput
    >;
    create: XOR<
      userCreateWithoutDonationsInput,
      userUncheckedCreateWithoutDonationsInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDonationsInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutDonationsInput,
      userUncheckedUpdateWithoutDonationsInput
    >;
  };

  export type userUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUpdateOneWithoutUserNestedInput;
    received_donations?: donationUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUpdateManyWithoutUserNestedInput;
    goals?: goalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput;
    received_donations?: donationUncheckedUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUncheckedUpdateManyWithoutUserNestedInput;
    goals?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type transactionUpsertWithWhereUniqueWithoutDonationInput = {
    where: transactionWhereUniqueInput;
    update: XOR<
      transactionUpdateWithoutDonationInput,
      transactionUncheckedUpdateWithoutDonationInput
    >;
    create: XOR<
      transactionCreateWithoutDonationInput,
      transactionUncheckedCreateWithoutDonationInput
    >;
  };

  export type transactionUpdateWithWhereUniqueWithoutDonationInput = {
    where: transactionWhereUniqueInput;
    data: XOR<
      transactionUpdateWithoutDonationInput,
      transactionUncheckedUpdateWithoutDonationInput
    >;
  };

  export type transactionUpdateManyWithWhereWithoutDonationInput = {
    where: transactionScalarWhereInput;
    data: XOR<
      transactionUpdateManyMutationInput,
      transactionUncheckedUpdateManyWithoutDonationInput
    >;
  };

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[];
    OR?: transactionScalarWhereInput[];
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[];
    id?: StringFilter<'transaction'> | string;
    donation_id?: StringFilter<'transaction'> | string;
    amount?:
      | DecimalFilter<'transaction'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFilter<'transaction'> | string;
    status?:
      | Enumtransaction_statusFilter<'transaction'>
      | $Enums.transaction_status;
    reference_id?: StringNullableFilter<'transaction'> | string | null;
    created_at?: DateTimeFilter<'transaction'> | Date | string;
    updated_at?: DateTimeFilter<'transaction'> | Date | string;
    deleted_at?: DateTimeNullableFilter<'transaction'> | Date | string | null;
  };

  export type donationCreateWithoutTransactionsInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    recipient: userCreateNestedOneWithoutReceived_donationsInput;
    donor?: userCreateNestedOneWithoutDonationsInput;
  };

  export type donationUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    recipient_id: string;
    donor_id?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type donationCreateOrConnectWithoutTransactionsInput = {
    where: donationWhereUniqueInput;
    create: XOR<
      donationCreateWithoutTransactionsInput,
      donationUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type donationUpsertWithoutTransactionsInput = {
    update: XOR<
      donationUpdateWithoutTransactionsInput,
      donationUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      donationCreateWithoutTransactionsInput,
      donationUncheckedCreateWithoutTransactionsInput
    >;
    where?: donationWhereInput;
  };

  export type donationUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: donationWhereInput;
    data: XOR<
      donationUpdateWithoutTransactionsInput,
      donationUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type donationUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recipient?: userUpdateOneRequiredWithoutReceived_donationsNestedInput;
    donor?: userUpdateOneWithoutDonationsNestedInput;
  };

  export type donationUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    recipient_id?: StringFieldUpdateOperationsInput | string;
    donor_id?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type userCreateWithoutOverlaysInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileCreateNestedOneWithoutUserInput;
    donations?: donationCreateNestedManyWithoutDonorInput;
    received_donations?: donationCreateNestedManyWithoutRecipientInput;
    goals?: goalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOverlaysInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileUncheckedCreateNestedOneWithoutUserInput;
    donations?: donationUncheckedCreateNestedManyWithoutDonorInput;
    received_donations?: donationUncheckedCreateNestedManyWithoutRecipientInput;
    goals?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOverlaysInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutOverlaysInput,
      userUncheckedCreateWithoutOverlaysInput
    >;
  };

  export type userUpsertWithoutOverlaysInput = {
    update: XOR<
      userUpdateWithoutOverlaysInput,
      userUncheckedUpdateWithoutOverlaysInput
    >;
    create: XOR<
      userCreateWithoutOverlaysInput,
      userUncheckedCreateWithoutOverlaysInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOverlaysInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutOverlaysInput,
      userUncheckedUpdateWithoutOverlaysInput
    >;
  };

  export type userUpdateWithoutOverlaysInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUpdateOneWithoutUserNestedInput;
    donations?: donationUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUpdateManyWithoutRecipientNestedInput;
    goals?: goalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOverlaysInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput;
    donations?: donationUncheckedUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUncheckedUpdateManyWithoutRecipientNestedInput;
    goals?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutGoalsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileCreateNestedOneWithoutUserInput;
    donations?: donationCreateNestedManyWithoutDonorInput;
    received_donations?: donationCreateNestedManyWithoutRecipientInput;
    overlays?: overlayCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGoalsInput = {
    id?: string;
    email: string;
    username: string;
    password: string;
    display_name?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    profile?: profileUncheckedCreateNestedOneWithoutUserInput;
    donations?: donationUncheckedCreateNestedManyWithoutDonorInput;
    received_donations?: donationUncheckedCreateNestedManyWithoutRecipientInput;
    overlays?: overlayUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutGoalsInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutGoalsInput,
      userUncheckedCreateWithoutGoalsInput
    >;
  };

  export type userUpsertWithoutGoalsInput = {
    update: XOR<
      userUpdateWithoutGoalsInput,
      userUncheckedUpdateWithoutGoalsInput
    >;
    create: XOR<
      userCreateWithoutGoalsInput,
      userUncheckedCreateWithoutGoalsInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGoalsInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutGoalsInput,
      userUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type userUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUpdateOneWithoutUserNestedInput;
    donations?: donationUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    display_name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profile?: profileUncheckedUpdateOneWithoutUserNestedInput;
    donations?: donationUncheckedUpdateManyWithoutDonorNestedInput;
    received_donations?: donationUncheckedUpdateManyWithoutRecipientNestedInput;
    overlays?: overlayUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type donationCreateManyDonorInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    recipient_id: string;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type donationCreateManyRecipientInput = {
    id?: string;
    external_id: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    donor_name: string;
    message?: string | null;
    status?: $Enums.donation_status;
    payment_url?: string | null;
    payment_method?: string | null;
    donor_id?: string | null;
    media_type?: string | null;
    media_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type overlayCreateManyUserInput = {
    id?: string;
    type: $Enums.overlay_type;
    name: string;
    config: JsonNullValueInput | InputJsonValue;
    token: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type goalCreateManyUserInput = {
    id?: string;
    title: string;
    target_amount: Decimal | DecimalJsLike | number | string;
    current_amount?: Decimal | DecimalJsLike | number | string;
    start_date?: Date | string;
    end_date?: Date | string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type donationUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recipient?: userUpdateOneRequiredWithoutReceived_donationsNestedInput;
    transactions?: transactionUpdateManyWithoutDonationNestedInput;
  };

  export type donationUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    recipient_id?: StringFieldUpdateOperationsInput | string;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionUncheckedUpdateManyWithoutDonationNestedInput;
  };

  export type donationUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    recipient_id?: StringFieldUpdateOperationsInput | string;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type donationUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    donor?: userUpdateOneWithoutDonationsNestedInput;
    transactions?: transactionUpdateManyWithoutDonationNestedInput;
  };

  export type donationUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    donor_id?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions?: transactionUncheckedUpdateManyWithoutDonationNestedInput;
  };

  export type donationUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    external_id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    donor_name?: StringFieldUpdateOperationsInput | string;
    message?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | Enumdonation_statusFieldUpdateOperationsInput
      | $Enums.donation_status;
    payment_url?: NullableStringFieldUpdateOperationsInput | string | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    donor_id?: NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type overlayUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type overlayUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type overlayUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: Enumoverlay_typeFieldUpdateOperationsInput | $Enums.overlay_type;
    name?: StringFieldUpdateOperationsInput | string;
    config?: JsonNullValueInput | InputJsonValue;
    token?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    target_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current_amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionCreateManyDonationInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    currency?: string;
    status?: $Enums.transaction_status;
    reference_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
  };

  export type transactionUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionUncheckedUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionUncheckedUpdateManyWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    currency?: StringFieldUpdateOperationsInput | string;
    status?:
      | Enumtransaction_statusFieldUpdateOperationsInput
      | $Enums.transaction_status;
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
