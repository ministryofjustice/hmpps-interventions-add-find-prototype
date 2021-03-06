/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.WhoDoingWorkDto = factory(root.HmppsOffenderAssessmentApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WhoDoingWorkDto model module.
   * @module model/WhoDoingWorkDto
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WhoDoingWorkDto</code>.
   * @alias module:model/WhoDoingWorkDto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>WhoDoingWorkDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhoDoingWorkDto} obj Optional instance to populate.
   * @return {module:model/WhoDoingWorkDto} The populated <code>WhoDoingWorkDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} comments
   */
  exports.prototype.comments = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  return exports;

}));
