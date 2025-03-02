[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / PluginInfo

# Interface: PluginInfo

[index](../modules/index.md).[api](../modules/index.api.md).PluginInfo

This is a serializable stub class that is used by the api to provide information about installed plugins.

**`export`**

**`interface`** PluginInfo

## Table of contents

### Properties

- [CanUninstall](index.api.PluginInfo.md#canuninstall)
- [ConfigurationFileName](index.api.PluginInfo.md#configurationfilename)
- [Description](index.api.PluginInfo.md#description)
- [HasImage](index.api.PluginInfo.md#hasimage)
- [Id](index.api.PluginInfo.md#id)
- [Name](index.api.PluginInfo.md#name)
- [Status](index.api.PluginInfo.md#status)
- [Version](index.api.PluginInfo.md#version)

## Properties

### CanUninstall

• `Optional` **CanUninstall**: `boolean`

Gets or sets a value indicating whether the plugin can be uninstalled.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L60)

___

### ConfigurationFileName

• `Optional` **ConfigurationFileName**: ``null`` \| `string`

Gets or sets the name of the configuration file.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L42)

___

### Description

• `Optional` **Description**: ``null`` \| `string`

Gets or sets the description.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L48)

___

### HasImage

• `Optional` **HasImage**: `boolean`

Gets or sets a value indicating whether this plugin has a valid image.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L66)

___

### Id

• `Optional` **Id**: `string`

Gets or sets the unique id.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L54)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

Gets or sets the name.

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:30](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L30)

___

### Status

• `Optional` **Status**: [`PluginStatus`](../enums/index.api.PluginStatus.md)

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L72)

___

### Version

• `Optional` **Version**: [`Version`](index.api.Version.md)

**`memberof`** PluginInfo

#### Defined in

[generated-client/models/plugin-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/plugin-info.ts#L36)
