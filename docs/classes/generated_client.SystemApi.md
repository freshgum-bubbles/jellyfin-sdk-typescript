[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / SystemApi

# Class: SystemApi

[generated-client](../modules/generated_client.md).SystemApi

SystemApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SystemApi`**

## Table of contents

### Constructors

- [constructor](generated_client.SystemApi.md#constructor)

### Properties

- [axios](generated_client.SystemApi.md#axios)
- [basePath](generated_client.SystemApi.md#basepath)
- [configuration](generated_client.SystemApi.md#configuration)

### Methods

- [getEndpointInfo](generated_client.SystemApi.md#getendpointinfo)
- [getLogFile](generated_client.SystemApi.md#getlogfile)
- [getPingSystem](generated_client.SystemApi.md#getpingsystem)
- [getPublicSystemInfo](generated_client.SystemApi.md#getpublicsysteminfo)
- [getServerLogs](generated_client.SystemApi.md#getserverlogs)
- [getSystemInfo](generated_client.SystemApi.md#getsysteminfo)
- [getWakeOnLanInfo](generated_client.SystemApi.md#getwakeonlaninfo)
- [postPingSystem](generated_client.SystemApi.md#postpingsystem)
- [restartApplication](generated_client.SystemApi.md#restartapplication)
- [shutdownApplication](generated_client.SystemApi.md#shutdownapplication)

## Constructors

### constructor

• **new SystemApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L50)

## Methods

### getEndpointInfo

▸ **getEndpointInfo**(`options?`): `Promise`<`AxiosResponse`<[`EndPointInfo`](../interfaces/index.api.EndPointInfo.md), `any`\>\>

**`summary`** Gets information about the request endpoint.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`EndPointInfo`](../interfaces/index.api.EndPointInfo.md), `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:610](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L610)

___

### getLogFile

▸ **getLogFile**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`summary`** Gets a log file.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`SystemApiGetLogFileRequest`](../interfaces/generated_client.SystemApiGetLogFileRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:622](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L622)

___

### getPingSystem

▸ **getPingSystem**(`options?`): `Promise`<`AxiosResponse`<`string`, `any`\>\>

**`summary`** Pings the system.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:633](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L633)

___

### getPublicSystemInfo

▸ **getPublicSystemInfo**(`options?`): `Promise`<`AxiosResponse`<[`PublicSystemInfo`](../interfaces/index.api.PublicSystemInfo.md), `any`\>\>

**`summary`** Gets public information about the server.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`PublicSystemInfo`](../interfaces/index.api.PublicSystemInfo.md), `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:644](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L644)

___

### getServerLogs

▸ **getServerLogs**(`options?`): `Promise`<`AxiosResponse`<[`LogFile`](../interfaces/index.api.LogFile.md)[], `any`\>\>

**`summary`** Gets a list of available server log files.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`LogFile`](../interfaces/index.api.LogFile.md)[], `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:655](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L655)

___

### getSystemInfo

▸ **getSystemInfo**(`options?`): `Promise`<`AxiosResponse`<[`SystemInfo`](../interfaces/index.api.SystemInfo.md), `any`\>\>

**`summary`** Gets information about the server.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`SystemInfo`](../interfaces/index.api.SystemInfo.md), `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:666](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L666)

___

### getWakeOnLanInfo

▸ **getWakeOnLanInfo**(`options?`): `Promise`<`AxiosResponse`<[`WakeOnLanInfo`](../interfaces/index.api.WakeOnLanInfo.md)[], `any`\>\>

**`summary`** Gets wake on lan information.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`WakeOnLanInfo`](../interfaces/index.api.WakeOnLanInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:677](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L677)

___

### postPingSystem

▸ **postPingSystem**(`options?`): `Promise`<`AxiosResponse`<`string`, `any`\>\>

**`summary`** Pings the system.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`string`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:688](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L688)

___

### restartApplication

▸ **restartApplication**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Restarts the application.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:699](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L699)

___

### shutdownApplication

▸ **shutdownApplication**(`options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Shuts down the application.

**`throws`** {RequiredError}

**`memberof`** SystemApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/system-api.ts:710](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/system-api.ts#L710)
