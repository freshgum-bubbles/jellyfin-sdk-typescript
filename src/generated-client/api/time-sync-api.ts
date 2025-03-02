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
import { UtcTimeResponse } from '../models';
/**
 * TimeSyncApi - axios parameter creator
 * @export
 */
export const TimeSyncApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the current UTC time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUtcTime: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/GetUtcTime`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * TimeSyncApi - functional programming interface
 * @export
 */
export const TimeSyncApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TimeSyncApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets the current UTC time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUtcTime(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UtcTimeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUtcTime(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TimeSyncApi - factory interface
 * @export
 */
export const TimeSyncApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TimeSyncApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets the current UTC time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUtcTime(options?: any): AxiosPromise<UtcTimeResponse> {
            return localVarFp.getUtcTime(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TimeSyncApi - object-oriented interface
 * @export
 * @class TimeSyncApi
 * @extends {BaseAPI}
 */
export class TimeSyncApi extends BaseAPI {
    /**
     * 
     * @summary Gets the current UTC time.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeSyncApi
     */
    public getUtcTime(options?: any) {
        return TimeSyncApiFp(this.configuration).getUtcTime(options).then((request) => request(this.axios, this.basePath));
    }
}
