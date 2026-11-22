<?php

namespace App\Service;

/** Levée quand le géocodeur ne reconnaît pas la commune saisie. */
class VilleIntrouvableException extends \RuntimeException
{
}
