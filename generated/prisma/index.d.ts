
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cep
 * 
 */
export type Cep = $Result.DefaultSelection<Prisma.$CepPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ceps
 * const ceps = await prisma.cep.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ceps
   * const ceps = await prisma.cep.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cep`: Exposes CRUD operations for the **Cep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ceps
    * const ceps = await prisma.cep.findMany()
    * ```
    */
  get cep(): Prisma.CepDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cep: 'Cep'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cep"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cep: {
        payload: Prisma.$CepPayload<ExtArgs>
        fields: Prisma.CepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>
          }
          findFirst: {
            args: Prisma.CepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>
          }
          findMany: {
            args: Prisma.CepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>[]
          }
          create: {
            args: Prisma.CepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>
          }
          createMany: {
            args: Prisma.CepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>[]
          }
          delete: {
            args: Prisma.CepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>
          }
          update: {
            args: Prisma.CepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>
          }
          deleteMany: {
            args: Prisma.CepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>[]
          }
          upsert: {
            args: Prisma.CepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CepPayload>
          }
          aggregate: {
            args: Prisma.CepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCep>
          }
          groupBy: {
            args: Prisma.CepGroupByArgs<ExtArgs>
            result: $Utils.Optional<CepGroupByOutputType>[]
          }
          count: {
            args: Prisma.CepCountArgs<ExtArgs>
            result: $Utils.Optional<CepCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cep?: CepOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cep
   */

  export type AggregateCep = {
    _count: CepCountAggregateOutputType | null
    _avg: CepAvgAggregateOutputType | null
    _sum: CepSumAggregateOutputType | null
    _min: CepMinAggregateOutputType | null
    _max: CepMaxAggregateOutputType | null
  }

  export type CepAvgAggregateOutputType = {
    id: number | null
  }

  export type CepSumAggregateOutputType = {
    id: number | null
  }

  export type CepMinAggregateOutputType = {
    id: number | null
    cep: string | null
    logradouro: string | null
    complemento: string | null
    bairro: string | null
    localidade: string | null
    uf: string | null
    ibge: string | null
    gia: string | null
    ddd: string | null
    siafi: string | null
  }

  export type CepMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    logradouro: string | null
    complemento: string | null
    bairro: string | null
    localidade: string | null
    uf: string | null
    ibge: string | null
    gia: string | null
    ddd: string | null
    siafi: string | null
  }

  export type CepCountAggregateOutputType = {
    id: number
    cep: number
    logradouro: number
    complemento: number
    bairro: number
    localidade: number
    uf: number
    ibge: number
    gia: number
    ddd: number
    siafi: number
    _all: number
  }


  export type CepAvgAggregateInputType = {
    id?: true
  }

  export type CepSumAggregateInputType = {
    id?: true
  }

  export type CepMinAggregateInputType = {
    id?: true
    cep?: true
    logradouro?: true
    complemento?: true
    bairro?: true
    localidade?: true
    uf?: true
    ibge?: true
    gia?: true
    ddd?: true
    siafi?: true
  }

  export type CepMaxAggregateInputType = {
    id?: true
    cep?: true
    logradouro?: true
    complemento?: true
    bairro?: true
    localidade?: true
    uf?: true
    ibge?: true
    gia?: true
    ddd?: true
    siafi?: true
  }

  export type CepCountAggregateInputType = {
    id?: true
    cep?: true
    logradouro?: true
    complemento?: true
    bairro?: true
    localidade?: true
    uf?: true
    ibge?: true
    gia?: true
    ddd?: true
    siafi?: true
    _all?: true
  }

  export type CepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cep to aggregate.
     */
    where?: CepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceps to fetch.
     */
    orderBy?: CepOrderByWithRelationInput | CepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ceps
    **/
    _count?: true | CepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CepMaxAggregateInputType
  }

  export type GetCepAggregateType<T extends CepAggregateArgs> = {
        [P in keyof T & keyof AggregateCep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCep[P]>
      : GetScalarType<T[P], AggregateCep[P]>
  }




  export type CepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CepWhereInput
    orderBy?: CepOrderByWithAggregationInput | CepOrderByWithAggregationInput[]
    by: CepScalarFieldEnum[] | CepScalarFieldEnum
    having?: CepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CepCountAggregateInputType | true
    _avg?: CepAvgAggregateInputType
    _sum?: CepSumAggregateInputType
    _min?: CepMinAggregateInputType
    _max?: CepMaxAggregateInputType
  }

  export type CepGroupByOutputType = {
    id: number
    cep: string
    logradouro: string
    complemento: string | null
    bairro: string
    localidade: string
    uf: string
    ibge: string | null
    gia: string | null
    ddd: string | null
    siafi: string | null
    _count: CepCountAggregateOutputType | null
    _avg: CepAvgAggregateOutputType | null
    _sum: CepSumAggregateOutputType | null
    _min: CepMinAggregateOutputType | null
    _max: CepMaxAggregateOutputType | null
  }

  type GetCepGroupByPayload<T extends CepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CepGroupByOutputType[P]>
            : GetScalarType<T[P], CepGroupByOutputType[P]>
        }
      >
    >


  export type CepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    complemento?: boolean
    bairro?: boolean
    localidade?: boolean
    uf?: boolean
    ibge?: boolean
    gia?: boolean
    ddd?: boolean
    siafi?: boolean
  }, ExtArgs["result"]["cep"]>

  export type CepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    complemento?: boolean
    bairro?: boolean
    localidade?: boolean
    uf?: boolean
    ibge?: boolean
    gia?: boolean
    ddd?: boolean
    siafi?: boolean
  }, ExtArgs["result"]["cep"]>

  export type CepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    complemento?: boolean
    bairro?: boolean
    localidade?: boolean
    uf?: boolean
    ibge?: boolean
    gia?: boolean
    ddd?: boolean
    siafi?: boolean
  }, ExtArgs["result"]["cep"]>

  export type CepSelectScalar = {
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    complemento?: boolean
    bairro?: boolean
    localidade?: boolean
    uf?: boolean
    ibge?: boolean
    gia?: boolean
    ddd?: boolean
    siafi?: boolean
  }

  export type CepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "logradouro" | "complemento" | "bairro" | "localidade" | "uf" | "ibge" | "gia" | "ddd" | "siafi", ExtArgs["result"]["cep"]>

  export type $CepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cep"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      logradouro: string
      complemento: string | null
      bairro: string
      localidade: string
      uf: string
      ibge: string | null
      gia: string | null
      ddd: string | null
      siafi: string | null
    }, ExtArgs["result"]["cep"]>
    composites: {}
  }

  type CepGetPayload<S extends boolean | null | undefined | CepDefaultArgs> = $Result.GetResult<Prisma.$CepPayload, S>

  type CepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CepCountAggregateInputType | true
    }

  export interface CepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cep'], meta: { name: 'Cep' } }
    /**
     * Find zero or one Cep that matches the filter.
     * @param {CepFindUniqueArgs} args - Arguments to find a Cep
     * @example
     * // Get one Cep
     * const cep = await prisma.cep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CepFindUniqueArgs>(args: SelectSubset<T, CepFindUniqueArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CepFindUniqueOrThrowArgs} args - Arguments to find a Cep
     * @example
     * // Get one Cep
     * const cep = await prisma.cep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CepFindUniqueOrThrowArgs>(args: SelectSubset<T, CepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepFindFirstArgs} args - Arguments to find a Cep
     * @example
     * // Get one Cep
     * const cep = await prisma.cep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CepFindFirstArgs>(args?: SelectSubset<T, CepFindFirstArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepFindFirstOrThrowArgs} args - Arguments to find a Cep
     * @example
     * // Get one Cep
     * const cep = await prisma.cep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CepFindFirstOrThrowArgs>(args?: SelectSubset<T, CepFindFirstOrThrowArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ceps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ceps
     * const ceps = await prisma.cep.findMany()
     * 
     * // Get first 10 Ceps
     * const ceps = await prisma.cep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cepWithIdOnly = await prisma.cep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CepFindManyArgs>(args?: SelectSubset<T, CepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cep.
     * @param {CepCreateArgs} args - Arguments to create a Cep.
     * @example
     * // Create one Cep
     * const Cep = await prisma.cep.create({
     *   data: {
     *     // ... data to create a Cep
     *   }
     * })
     * 
     */
    create<T extends CepCreateArgs>(args: SelectSubset<T, CepCreateArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ceps.
     * @param {CepCreateManyArgs} args - Arguments to create many Ceps.
     * @example
     * // Create many Ceps
     * const cep = await prisma.cep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CepCreateManyArgs>(args?: SelectSubset<T, CepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ceps and returns the data saved in the database.
     * @param {CepCreateManyAndReturnArgs} args - Arguments to create many Ceps.
     * @example
     * // Create many Ceps
     * const cep = await prisma.cep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ceps and only return the `id`
     * const cepWithIdOnly = await prisma.cep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CepCreateManyAndReturnArgs>(args?: SelectSubset<T, CepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cep.
     * @param {CepDeleteArgs} args - Arguments to delete one Cep.
     * @example
     * // Delete one Cep
     * const Cep = await prisma.cep.delete({
     *   where: {
     *     // ... filter to delete one Cep
     *   }
     * })
     * 
     */
    delete<T extends CepDeleteArgs>(args: SelectSubset<T, CepDeleteArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cep.
     * @param {CepUpdateArgs} args - Arguments to update one Cep.
     * @example
     * // Update one Cep
     * const cep = await prisma.cep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CepUpdateArgs>(args: SelectSubset<T, CepUpdateArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ceps.
     * @param {CepDeleteManyArgs} args - Arguments to filter Ceps to delete.
     * @example
     * // Delete a few Ceps
     * const { count } = await prisma.cep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CepDeleteManyArgs>(args?: SelectSubset<T, CepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ceps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ceps
     * const cep = await prisma.cep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CepUpdateManyArgs>(args: SelectSubset<T, CepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ceps and returns the data updated in the database.
     * @param {CepUpdateManyAndReturnArgs} args - Arguments to update many Ceps.
     * @example
     * // Update many Ceps
     * const cep = await prisma.cep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ceps and only return the `id`
     * const cepWithIdOnly = await prisma.cep.updateManyAndReturn({
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
    updateManyAndReturn<T extends CepUpdateManyAndReturnArgs>(args: SelectSubset<T, CepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cep.
     * @param {CepUpsertArgs} args - Arguments to update or create a Cep.
     * @example
     * // Update or create a Cep
     * const cep = await prisma.cep.upsert({
     *   create: {
     *     // ... data to create a Cep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cep we want to update
     *   }
     * })
     */
    upsert<T extends CepUpsertArgs>(args: SelectSubset<T, CepUpsertArgs<ExtArgs>>): Prisma__CepClient<$Result.GetResult<Prisma.$CepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ceps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepCountArgs} args - Arguments to filter Ceps to count.
     * @example
     * // Count the number of Ceps
     * const count = await prisma.cep.count({
     *   where: {
     *     // ... the filter for the Ceps we want to count
     *   }
     * })
    **/
    count<T extends CepCountArgs>(
      args?: Subset<T, CepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CepAggregateArgs>(args: Subset<T, CepAggregateArgs>): Prisma.PrismaPromise<GetCepAggregateType<T>>

    /**
     * Group by Cep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CepGroupByArgs} args - Group by arguments.
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
      T extends CepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CepGroupByArgs['orderBy'] }
        : { orderBy?: CepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cep model
   */
  readonly fields: CepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cep model
   */
  interface CepFieldRefs {
    readonly id: FieldRef<"Cep", 'Int'>
    readonly cep: FieldRef<"Cep", 'String'>
    readonly logradouro: FieldRef<"Cep", 'String'>
    readonly complemento: FieldRef<"Cep", 'String'>
    readonly bairro: FieldRef<"Cep", 'String'>
    readonly localidade: FieldRef<"Cep", 'String'>
    readonly uf: FieldRef<"Cep", 'String'>
    readonly ibge: FieldRef<"Cep", 'String'>
    readonly gia: FieldRef<"Cep", 'String'>
    readonly ddd: FieldRef<"Cep", 'String'>
    readonly siafi: FieldRef<"Cep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cep findUnique
   */
  export type CepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * Filter, which Cep to fetch.
     */
    where: CepWhereUniqueInput
  }

  /**
   * Cep findUniqueOrThrow
   */
  export type CepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * Filter, which Cep to fetch.
     */
    where: CepWhereUniqueInput
  }

  /**
   * Cep findFirst
   */
  export type CepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * Filter, which Cep to fetch.
     */
    where?: CepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceps to fetch.
     */
    orderBy?: CepOrderByWithRelationInput | CepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ceps.
     */
    cursor?: CepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ceps.
     */
    distinct?: CepScalarFieldEnum | CepScalarFieldEnum[]
  }

  /**
   * Cep findFirstOrThrow
   */
  export type CepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * Filter, which Cep to fetch.
     */
    where?: CepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceps to fetch.
     */
    orderBy?: CepOrderByWithRelationInput | CepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ceps.
     */
    cursor?: CepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ceps.
     */
    distinct?: CepScalarFieldEnum | CepScalarFieldEnum[]
  }

  /**
   * Cep findMany
   */
  export type CepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * Filter, which Ceps to fetch.
     */
    where?: CepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceps to fetch.
     */
    orderBy?: CepOrderByWithRelationInput | CepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ceps.
     */
    cursor?: CepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceps.
     */
    skip?: number
    distinct?: CepScalarFieldEnum | CepScalarFieldEnum[]
  }

  /**
   * Cep create
   */
  export type CepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * The data needed to create a Cep.
     */
    data: XOR<CepCreateInput, CepUncheckedCreateInput>
  }

  /**
   * Cep createMany
   */
  export type CepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ceps.
     */
    data: CepCreateManyInput | CepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cep createManyAndReturn
   */
  export type CepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * The data used to create many Ceps.
     */
    data: CepCreateManyInput | CepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cep update
   */
  export type CepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * The data needed to update a Cep.
     */
    data: XOR<CepUpdateInput, CepUncheckedUpdateInput>
    /**
     * Choose, which Cep to update.
     */
    where: CepWhereUniqueInput
  }

  /**
   * Cep updateMany
   */
  export type CepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ceps.
     */
    data: XOR<CepUpdateManyMutationInput, CepUncheckedUpdateManyInput>
    /**
     * Filter which Ceps to update
     */
    where?: CepWhereInput
    /**
     * Limit how many Ceps to update.
     */
    limit?: number
  }

  /**
   * Cep updateManyAndReturn
   */
  export type CepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * The data used to update Ceps.
     */
    data: XOR<CepUpdateManyMutationInput, CepUncheckedUpdateManyInput>
    /**
     * Filter which Ceps to update
     */
    where?: CepWhereInput
    /**
     * Limit how many Ceps to update.
     */
    limit?: number
  }

  /**
   * Cep upsert
   */
  export type CepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * The filter to search for the Cep to update in case it exists.
     */
    where: CepWhereUniqueInput
    /**
     * In case the Cep found by the `where` argument doesn't exist, create a new Cep with this data.
     */
    create: XOR<CepCreateInput, CepUncheckedCreateInput>
    /**
     * In case the Cep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CepUpdateInput, CepUncheckedUpdateInput>
  }

  /**
   * Cep delete
   */
  export type CepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
    /**
     * Filter which Cep to delete.
     */
    where: CepWhereUniqueInput
  }

  /**
   * Cep deleteMany
   */
  export type CepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ceps to delete
     */
    where?: CepWhereInput
    /**
     * Limit how many Ceps to delete.
     */
    limit?: number
  }

  /**
   * Cep without action
   */
  export type CepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cep
     */
    select?: CepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cep
     */
    omit?: CepOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CepScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    logradouro: 'logradouro',
    complemento: 'complemento',
    bairro: 'bairro',
    localidade: 'localidade',
    uf: 'uf',
    ibge: 'ibge',
    gia: 'gia',
    ddd: 'ddd',
    siafi: 'siafi'
  };

  export type CepScalarFieldEnum = (typeof CepScalarFieldEnum)[keyof typeof CepScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CepWhereInput = {
    AND?: CepWhereInput | CepWhereInput[]
    OR?: CepWhereInput[]
    NOT?: CepWhereInput | CepWhereInput[]
    id?: IntFilter<"Cep"> | number
    cep?: StringFilter<"Cep"> | string
    logradouro?: StringFilter<"Cep"> | string
    complemento?: StringNullableFilter<"Cep"> | string | null
    bairro?: StringFilter<"Cep"> | string
    localidade?: StringFilter<"Cep"> | string
    uf?: StringFilter<"Cep"> | string
    ibge?: StringNullableFilter<"Cep"> | string | null
    gia?: StringNullableFilter<"Cep"> | string | null
    ddd?: StringNullableFilter<"Cep"> | string | null
    siafi?: StringNullableFilter<"Cep"> | string | null
  }

  export type CepOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    ibge?: SortOrderInput | SortOrder
    gia?: SortOrderInput | SortOrder
    ddd?: SortOrderInput | SortOrder
    siafi?: SortOrderInput | SortOrder
  }

  export type CepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cep?: string
    AND?: CepWhereInput | CepWhereInput[]
    OR?: CepWhereInput[]
    NOT?: CepWhereInput | CepWhereInput[]
    logradouro?: StringFilter<"Cep"> | string
    complemento?: StringNullableFilter<"Cep"> | string | null
    bairro?: StringFilter<"Cep"> | string
    localidade?: StringFilter<"Cep"> | string
    uf?: StringFilter<"Cep"> | string
    ibge?: StringNullableFilter<"Cep"> | string | null
    gia?: StringNullableFilter<"Cep"> | string | null
    ddd?: StringNullableFilter<"Cep"> | string | null
    siafi?: StringNullableFilter<"Cep"> | string | null
  }, "id" | "cep">

  export type CepOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    ibge?: SortOrderInput | SortOrder
    gia?: SortOrderInput | SortOrder
    ddd?: SortOrderInput | SortOrder
    siafi?: SortOrderInput | SortOrder
    _count?: CepCountOrderByAggregateInput
    _avg?: CepAvgOrderByAggregateInput
    _max?: CepMaxOrderByAggregateInput
    _min?: CepMinOrderByAggregateInput
    _sum?: CepSumOrderByAggregateInput
  }

  export type CepScalarWhereWithAggregatesInput = {
    AND?: CepScalarWhereWithAggregatesInput | CepScalarWhereWithAggregatesInput[]
    OR?: CepScalarWhereWithAggregatesInput[]
    NOT?: CepScalarWhereWithAggregatesInput | CepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cep"> | number
    cep?: StringWithAggregatesFilter<"Cep"> | string
    logradouro?: StringWithAggregatesFilter<"Cep"> | string
    complemento?: StringNullableWithAggregatesFilter<"Cep"> | string | null
    bairro?: StringWithAggregatesFilter<"Cep"> | string
    localidade?: StringWithAggregatesFilter<"Cep"> | string
    uf?: StringWithAggregatesFilter<"Cep"> | string
    ibge?: StringNullableWithAggregatesFilter<"Cep"> | string | null
    gia?: StringNullableWithAggregatesFilter<"Cep"> | string | null
    ddd?: StringNullableWithAggregatesFilter<"Cep"> | string | null
    siafi?: StringNullableWithAggregatesFilter<"Cep"> | string | null
  }

  export type CepCreateInput = {
    cep: string
    logradouro: string
    complemento?: string | null
    bairro: string
    localidade: string
    uf: string
    ibge?: string | null
    gia?: string | null
    ddd?: string | null
    siafi?: string | null
  }

  export type CepUncheckedCreateInput = {
    id?: number
    cep: string
    logradouro: string
    complemento?: string | null
    bairro: string
    localidade: string
    uf: string
    ibge?: string | null
    gia?: string | null
    ddd?: string | null
    siafi?: string | null
  }

  export type CepUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    localidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    ibge?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: NullableStringFieldUpdateOperationsInput | string | null
    ddd?: NullableStringFieldUpdateOperationsInput | string | null
    siafi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    localidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    ibge?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: NullableStringFieldUpdateOperationsInput | string | null
    ddd?: NullableStringFieldUpdateOperationsInput | string | null
    siafi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CepCreateManyInput = {
    id?: number
    cep: string
    logradouro: string
    complemento?: string | null
    bairro: string
    localidade: string
    uf: string
    ibge?: string | null
    gia?: string | null
    ddd?: string | null
    siafi?: string | null
  }

  export type CepUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    localidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    ibge?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: NullableStringFieldUpdateOperationsInput | string | null
    ddd?: NullableStringFieldUpdateOperationsInput | string | null
    siafi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    localidade?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    ibge?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: NullableStringFieldUpdateOperationsInput | string | null
    ddd?: NullableStringFieldUpdateOperationsInput | string | null
    siafi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CepCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    ibge?: SortOrder
    gia?: SortOrder
    ddd?: SortOrder
    siafi?: SortOrder
  }

  export type CepAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CepMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    ibge?: SortOrder
    gia?: SortOrder
    ddd?: SortOrder
    siafi?: SortOrder
  }

  export type CepMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    ibge?: SortOrder
    gia?: SortOrder
    ddd?: SortOrder
    siafi?: SortOrder
  }

  export type CepSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}