/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AuthenticationInfoQueryResult } from '../models';
/**
 * ApiKeyApi - axios parameter creator
 * @export
 */
export const ApiKeyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new api key.
         * @param {string} app Name of the app using the authentication key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createKey: async (app: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'app' is not null or undefined
            assertParamExists('createKey', 'app', app)
            const localVarPath = `/Auth/Keys`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (app !== undefined) {
                localVarQueryParameter['app'] = app;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all keys.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKeys: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Auth/Keys`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Remove an api key.
         * @param {string} key The access token to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeKey: async (key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            assertParamExists('revokeKey', 'key', key)
            const localVarPath = `/Auth/Keys/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiKeyApi - functional programming interface
 * @export
 */
export const ApiKeyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiKeyApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new api key.
         * @param {string} app Name of the app using the authentication key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createKey(app: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createKey(app, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all keys.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKeys(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationInfoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getKeys(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove an api key.
         * @param {string} key The access token to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokeKey(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokeKey(key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApiKeyApi - factory interface
 * @export
 */
export const ApiKeyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiKeyApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new api key.
         * @param {string} app Name of the app using the authentication key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createKey(app: string, options?: any): AxiosPromise<void> {
            return localVarFp.createKey(app, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all keys.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKeys(options?: any): AxiosPromise<AuthenticationInfoQueryResult> {
            return localVarFp.getKeys(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove an api key.
         * @param {string} key The access token to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeKey(key: string, options?: any): AxiosPromise<void> {
            return localVarFp.revokeKey(key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createKey operation in ApiKeyApi.
 * @export
 * @interface ApiKeyApiCreateKeyRequest
 */
export interface ApiKeyApiCreateKeyRequest {
    /**
     * Name of the app using the authentication key.
     * @type {string}
     * @memberof ApiKeyApiCreateKey
     */
    readonly app: string
}

/**
 * Request parameters for revokeKey operation in ApiKeyApi.
 * @export
 * @interface ApiKeyApiRevokeKeyRequest
 */
export interface ApiKeyApiRevokeKeyRequest {
    /**
     * The access token to delete.
     * @type {string}
     * @memberof ApiKeyApiRevokeKey
     */
    readonly key: string
}

/**
 * ApiKeyApi - object-oriented interface
 * @export
 * @class ApiKeyApi
 * @extends {BaseAPI}
 */
export class ApiKeyApi extends BaseAPI {
    /**
     * 
     * @summary Create a new api key.
     * @param {ApiKeyApiCreateKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeyApi
     */
    public createKey(requestParameters: ApiKeyApiCreateKeyRequest, options?: any) {
        return ApiKeyApiFp(this.configuration).createKey(requestParameters.app, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all keys.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeyApi
     */
    public getKeys(options?: any) {
        return ApiKeyApiFp(this.configuration).getKeys(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove an api key.
     * @param {ApiKeyApiRevokeKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeyApi
     */
    public revokeKey(requestParameters: ApiKeyApiRevokeKeyRequest, options?: any) {
        return ApiKeyApiFp(this.configuration).revokeKey(requestParameters.key, options).then((request) => request(this.axios, this.basePath));
    }
}
