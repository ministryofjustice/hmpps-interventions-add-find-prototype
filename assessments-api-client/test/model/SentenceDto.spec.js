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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HmppsOffenderAssessmentApi);
  }
}(this, function(expect, HmppsOffenderAssessmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SentenceDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.SentenceDto();
      });

      it('should create an instance of SentenceDto', function() {
        // TODO: update the code to test SentenceDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.SentenceDto);
      });

      it('should have the property activity (base name: "activity")', function() {
        // TODO: update the code to test the property activity
        expect(instance).to.have.property('activity');
        // expect(instance.activity).to.be(expectedValueLiteral);
      });

      it('should have the property cja (base name: "cja")', function() {
        // TODO: update the code to test the property cja
        expect(instance).to.have.property('cja');
        // expect(instance.cja).to.be(expectedValueLiteral);
      });

      it('should have the property cjaSupervisionMonths (base name: "cjaSupervisionMonths")', function() {
        // TODO: update the code to test the property cjaSupervisionMonths
        expect(instance).to.have.property('cjaSupervisionMonths');
        // expect(instance.cjaSupervisionMonths).to.be(expectedValueLiteral);
      });

      it('should have the property cjaUnpaidHours (base name: "cjaUnpaidHours")', function() {
        // TODO: update the code to test the property cjaUnpaidHours
        expect(instance).to.have.property('cjaUnpaidHours');
        // expect(instance.cjaUnpaidHours).to.be(expectedValueLiteral);
      });

      it('should have the property custodial (base name: "custodial")', function() {
        // TODO: update the code to test the property custodial
        expect(instance).to.have.property('custodial');
        // expect(instance.custodial).to.be(expectedValueLiteral);
      });

      it('should have the property offenceBlockType (base name: "offenceBlockType")', function() {
        // TODO: update the code to test the property offenceBlockType
        expect(instance).to.have.property('offenceBlockType');
        // expect(instance.offenceBlockType).to.be(expectedValueLiteral);
      });

      it('should have the property offenceDate (base name: "offenceDate")', function() {
        // TODO: update the code to test the property offenceDate
        expect(instance).to.have.property('offenceDate');
        // expect(instance.offenceDate).to.be(expectedValueLiteral);
      });

      it('should have the property orderType (base name: "orderType")', function() {
        // TODO: update the code to test the property orderType
        expect(instance).to.have.property('orderType');
        // expect(instance.orderType).to.be(expectedValueLiteral);
      });

      it('should have the property sentenceCode (base name: "sentenceCode")', function() {
        // TODO: update the code to test the property sentenceCode
        expect(instance).to.have.property('sentenceCode');
        // expect(instance.sentenceCode).to.be(expectedValueLiteral);
      });

      it('should have the property sentenceDate (base name: "sentenceDate")', function() {
        // TODO: update the code to test the property sentenceDate
        expect(instance).to.have.property('sentenceDate');
        // expect(instance.sentenceDate).to.be(expectedValueLiteral);
      });

      it('should have the property sentenceDescription (base name: "sentenceDescription")', function() {
        // TODO: update the code to test the property sentenceDescription
        expect(instance).to.have.property('sentenceDescription');
        // expect(instance.sentenceDescription).to.be(expectedValueLiteral);
      });

      it('should have the property sentenceLengthCustodyDays (base name: "sentenceLengthCustodyDays")', function() {
        // TODO: update the code to test the property sentenceLengthCustodyDays
        expect(instance).to.have.property('sentenceLengthCustodyDays');
        // expect(instance.sentenceLengthCustodyDays).to.be(expectedValueLiteral);
      });

    });
  });

}));
