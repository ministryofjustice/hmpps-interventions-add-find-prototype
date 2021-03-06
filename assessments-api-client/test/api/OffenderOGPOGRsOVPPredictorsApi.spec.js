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

  beforeEach(function() {
    instance = new HmppsOffenderAssessmentApi.OffenderOGPOGRsOVPPredictorsApi();
  });

  describe('(package)', function() {
    describe('OffenderOGPOGRsOVPPredictorsApi', function() {
      describe('getPredictorScoresForOasysOffenderIdUsingGET', function() {
        it('should call getPredictorScoresForOasysOffenderIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getPredictorScoresForOasysOffenderIdUsingGET call and complete the assertions
          /*
          var identity = "identity_example";
          var identityType = "identityType_example";

          instance.getPredictorScoresForOasysOffenderIdUsingGET(identity, identityType).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(HmppsOffenderAssessmentApi.PredictorDto);
              expect(data.assessmentCompleted).to.be.a('boolean');
              expect(data.assessmentCompleted).to.be(false);
              expect(data.completedDate).to.be.a(Date);
              expect(data.completedDate).to.be(new Date());
              expect(data.oasysSetId).to.be.a('number');
              expect(data.oasysSetId).to.be("0");
              expect(data.ogp).to.be.a(HmppsOffenderAssessmentApi.OgpDto);
                    expect(data.ogp.ogp1Year).to.be.a('number');
                expect(data.ogp.ogp1Year).to.be();
                expect(data.ogp.ogp2Year).to.be.a('number');
                expect(data.ogp.ogp2Year).to.be();
                expect(data.ogp.ogpDynamicWeightedScore).to.be.a('number');
                expect(data.ogp.ogpDynamicWeightedScore).to.be();
                expect(data.ogp.ogpRisk).to.be.a(HmppsOffenderAssessmentApi.RefElementDto);
                      expect(data.ogp.ogpRisk.code).to.be.a('string');
                  expect(data.ogp.ogpRisk.code).to.be("LAYER_3");
                  expect(data.ogp.ogpRisk.description).to.be.a('string');
                  expect(data.ogp.ogpRisk.description).to.be("Full (Layer 3)");
                  expect(data.ogp.ogpRisk.shortDescription).to.be.a('string');
                  expect(data.ogp.ogpRisk.shortDescription).to.be("Layer 3");
                expect(data.ogp.ogpStaticWeightedScore).to.be.a('number');
                expect(data.ogp.ogpStaticWeightedScore).to.be();
                expect(data.ogp.ogpTotalWeightedScore).to.be.a('number');
                expect(data.ogp.ogpTotalWeightedScore).to.be();
              expect(data.ogr3).to.be.a(HmppsOffenderAssessmentApi.Ogrs3Dto);
                    expect(data.ogr3.ogrs31Year).to.be.a('number');
                expect(data.ogr3.ogrs31Year).to.be();
                expect(data.ogr3.ogrs32Year).to.be.a('number');
                expect(data.ogr3.ogrs32Year).to.be();
                expect(data.ogr3.reconvictionRisk).to.be.a(HmppsOffenderAssessmentApi.RefElementDto);
                      expect(data.ogr3.reconvictionRisk.code).to.be.a('string');
                  expect(data.ogr3.reconvictionRisk.code).to.be("LAYER_3");
                  expect(data.ogr3.reconvictionRisk.description).to.be.a('string');
                  expect(data.ogr3.reconvictionRisk.description).to.be("Full (Layer 3)");
                  expect(data.ogr3.reconvictionRisk.shortDescription).to.be.a('string');
                  expect(data.ogr3.reconvictionRisk.shortDescription).to.be("Layer 3");
              expect(data.otherRisk).to.be.a(HmppsOffenderAssessmentApi.RefElementDto);
                    expect(data.otherRisk.code).to.be.a('string');
                expect(data.otherRisk.code).to.be("LAYER_3");
                expect(data.otherRisk.description).to.be.a('string');
                expect(data.otherRisk.description).to.be("Full (Layer 3)");
                expect(data.otherRisk.shortDescription).to.be.a('string');
                expect(data.otherRisk.shortDescription).to.be("Layer 3");
              expect(data.ovp).to.be.a(HmppsOffenderAssessmentApi.OvpDto);
                    expect(data.ovp.ovp1Year).to.be.a('number');
                expect(data.ovp.ovp1Year).to.be();
                expect(data.ovp.ovp2Year).to.be.a('number');
                expect(data.ovp.ovp2Year).to.be();
                expect(data.ovp.ovpAgeWeightedScore).to.be.a('number');
                expect(data.ovp.ovpAgeWeightedScore).to.be();
                expect(data.ovp.ovpDynamicWeightedScore).to.be.a('number');
                expect(data.ovp.ovpDynamicWeightedScore).to.be();
                expect(data.ovp.ovpNonViolentWeightedScore).to.be.a('number');
                expect(data.ovp.ovpNonViolentWeightedScore).to.be();
                expect(data.ovp.ovpPreviousWeightedScore).to.be.a('number');
                expect(data.ovp.ovpPreviousWeightedScore).to.be();
                expect(data.ovp.ovpRisk).to.be.a(HmppsOffenderAssessmentApi.RefElementDto);
                      expect(data.ovp.ovpRisk.code).to.be.a('string');
                  expect(data.ovp.ovpRisk.code).to.be("LAYER_3");
                  expect(data.ovp.ovpRisk.description).to.be.a('string');
                  expect(data.ovp.ovpRisk.description).to.be("Full (Layer 3)");
                  expect(data.ovp.ovpRisk.shortDescription).to.be.a('string');
                  expect(data.ovp.ovpRisk.shortDescription).to.be("Layer 3");
                expect(data.ovp.ovpSexWeightedScore).to.be.a('number');
                expect(data.ovp.ovpSexWeightedScore).to.be();
                expect(data.ovp.ovpStaticWeightedScore).to.be.a('number');
                expect(data.ovp.ovpStaticWeightedScore).to.be();
                expect(data.ovp.ovpTotalWeightedScore).to.be.a('number');
                expect(data.ovp.ovpTotalWeightedScore).to.be();
                expect(data.ovp.ovpViolentWeightedScore).to.be.a('number');
                expect(data.ovp.ovpViolentWeightedScore).to.be();
              expect(data.refAssessmentId).to.be.a('number');
              expect(data.refAssessmentId).to.be("0");
              expect(data.refAssessmentVersionCode).to.be.a('string');
              expect(data.refAssessmentVersionCode).to.be("");
              expect(data.refAssessmentVersionNumber).to.be.a('string');
              expect(data.refAssessmentVersionNumber).to.be("");
              expect(data.voidedDateTime).to.be.a(Date);
              expect(data.voidedDateTime).to.be(new Date());
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
