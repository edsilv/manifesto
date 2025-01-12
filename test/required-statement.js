var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('required statement', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.requiredstatement).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has correct required statement', function () {
        var requiredStatement = manifest.getRequiredStatement();
        expect(requiredStatement).to.exist;
        expect(Manifesto.LanguageMap.getValue(requiredStatement.label) === 'Important information');
        expect(Manifesto.LanguageMap.getValue(requiredStatement.value) === '<p>Please read the <a href=\'https://bl.uk\'>full information</a> about this object.</p>');
    });
});

describe('attribution', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.anzacbulletin).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has correct attribution', function () {
        var requiredStatement = manifest.getRequiredStatement();
        expect(requiredStatement).to.exist;
        expect(requiredStatement.label === undefined);
        expect(Manifesto.LanguageMap.getValue(requiredStatement.value) === 'Anzac bulletin. Number 24(1917:Jun.) Usage Terms: Free from known copyright restrictions.');
    });
});