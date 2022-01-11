/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Proj from '../model/Proj';

/**
* Proj service.
* @module api/ProjApi
* @version 1.0.0
*/
export default class ProjApi {

    /**
    * Constructs a new ProjApi. 
    * @alias module:api/ProjApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createproj operation.
     * @callback module:api/ProjApi~createprojCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Proj} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Proj} proj data to be created
     * @param {module:api/ProjApi~createprojCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Proj}
     */
    createproj(proj, callback) {
      let postBody = proj;
      // verify the required parameter 'proj' is set
      if (proj === undefined || proj === null) {
        throw new Error("Missing the required parameter 'proj' when calling createproj");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Proj;
      return this.apiClient.callApi(
        '/proj', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteproj operation.
     * @callback module:api/ProjApi~deleteprojCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} projId the Id parameter
     * @param {module:api/ProjApi~deleteprojCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteproj(projId, callback) {
      let postBody = null;
      // verify the required parameter 'projId' is set
      if (projId === undefined || projId === null) {
        throw new Error("Missing the required parameter 'projId' when calling deleteproj");
      }

      let pathParams = {
        'projId': projId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/proj/{projId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllproj operation.
     * @callback module:api/ProjApi~getAllprojCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Proj>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/ProjApi~getAllprojCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Proj>}
     */
    getAllproj(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Proj];
      return this.apiClient.callApi(
        '/proj/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getproj operation.
     * @callback module:api/ProjApi~getprojCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Proj} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} projId the Id parameter
     * @param {module:api/ProjApi~getprojCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Proj}
     */
    getproj(projId, callback) {
      let postBody = null;
      // verify the required parameter 'projId' is set
      if (projId === undefined || projId === null) {
        throw new Error("Missing the required parameter 'projId' when calling getproj");
      }

      let pathParams = {
        'projId': projId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Proj;
      return this.apiClient.callApi(
        '/proj/{projId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateproj operation.
     * @callback module:api/ProjApi~updateprojCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Proj} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} projId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Proj} opts.proj data to be updated
     * @param {module:api/ProjApi~updateprojCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Proj}
     */
    updateproj(projId, opts, callback) {
      opts = opts || {};
      let postBody = opts['proj'];
      // verify the required parameter 'projId' is set
      if (projId === undefined || projId === null) {
        throw new Error("Missing the required parameter 'projId' when calling updateproj");
      }

      let pathParams = {
        'projId': projId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Proj;
      return this.apiClient.callApi(
        '/proj/{projId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}