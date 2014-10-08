<?php 
$I = new AcceptanceTester($scenario);
$I->wantTo('check is Paulius CEO of NFQ');
$I->amOnPage('/');
$I->seeElement('img[alt="Paulius Insoda"]');
