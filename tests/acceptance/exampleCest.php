<?php

namespace acceptance;

use \AcceptanceTester;

class ExampleCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    public function tryToTest(AcceptanceTester $I)
    {
        $I->wantTo('check is Paulius CEO of NFQ');
        $I->amOnPage('/');
        $I->seeElement('img[alt="Paulius Insoda"]');
    }
}
