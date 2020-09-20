import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

suite('Extension Test Suite', function() {
	this.timeout(6000);

	test('cat coding', (done) => {
		vscode.commands.executeCommand("catCoding.start");
		setTimeout(() => {
			done();
		}, 5000);
	});
});
