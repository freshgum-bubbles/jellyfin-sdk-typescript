[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / PackageApi

# Class: PackageApi

[generated-client](../modules/generated_client.md).PackageApi

PackageApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`PackageApi`**

## Table of contents

### Constructors

- [constructor](generated_client.PackageApi.md#constructor)

### Properties

- [axios](generated_client.PackageApi.md#axios)
- [basePath](generated_client.PackageApi.md#basepath)
- [configuration](generated_client.PackageApi.md#configuration)

### Methods

- [cancelPackageInstallation](generated_client.PackageApi.md#cancelpackageinstallation)
- [getPackageInfo](generated_client.PackageApi.md#getpackageinfo)
- [getPackages](generated_client.PackageApi.md#getpackages)
- [getRepositories](generated_client.PackageApi.md#getrepositories)
- [installPackage](generated_client.PackageApi.md#installpackage)
- [setRepositories](generated_client.PackageApi.md#setrepositories)

## Constructors

### constructor

• **new PackageApi**(`configuration?`, `basePath?`, `axios?`)

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

### cancelPackageInstallation

▸ **cancelPackageInstallation**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Cancels a package installation.

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiCancelPackageInstallationRequest`](../interfaces/generated_client.PackageApiCancelPackageInstallationRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/package-api.ts:523](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/package-api.ts#L523)

___

### getPackageInfo

▸ **getPackageInfo**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`PackageInfo`](../interfaces/index.api.PackageInfo.md), `any`\>\>

**`summary`** Gets a package by name or assembly GUID.

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiGetPackageInfoRequest`](../interfaces/generated_client.PackageApiGetPackageInfoRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PackageInfo`](../interfaces/index.api.PackageInfo.md), `any`\>\>

#### Defined in

[generated-client/api/package-api.ts:535](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/package-api.ts#L535)

___

### getPackages

▸ **getPackages**(`options?`): `Promise`<`AxiosResponse`<[`PackageInfo`](../interfaces/index.api.PackageInfo.md)[], `any`\>\>

**`summary`** Gets available packages.

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`PackageInfo`](../interfaces/index.api.PackageInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/package-api.ts:546](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/package-api.ts#L546)

___

### getRepositories

▸ **getRepositories**(`options?`): `Promise`<`AxiosResponse`<[`RepositoryInfo`](../interfaces/index.api.RepositoryInfo.md)[], `any`\>\>

**`summary`** Gets all package repositories.

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`RepositoryInfo`](../interfaces/index.api.RepositoryInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/package-api.ts:557](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/package-api.ts#L557)

___

### installPackage

▸ **installPackage**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Installs a package.

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiInstallPackageRequest`](../interfaces/generated_client.PackageApiInstallPackageRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/package-api.ts:569](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/package-api.ts#L569)

___

### setRepositories

▸ **setRepositories**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Sets the enabled and existing package repositories.

**`throws`** {RequiredError}

**`memberof`** PackageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`PackageApiSetRepositoriesRequest`](../interfaces/generated_client.PackageApiSetRepositoriesRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/package-api.ts:581](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/package-api.ts#L581)
