$base = "C:\prosopocracy\app\paper\content\2"
$enc = New-Object System.Text.UTF8Encoding($false)

$file = Join-Path $base "polish.tsx"
$t = [System.IO.File]::ReadAllText($file, $enc)
$find = @'
λύ-ω, λύ-εις, λύ-ει → λύ-ομαι, λύ-ῃ, λύ-εται
'@
$repl = @'
λύω, λύεις, λύει → λύομαι, λύῃ, λύεται
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
ἔλυσ-α, ἔλυσ-ας, ἔλυσ-ε → ἐλύθη-ν, ἐλύθη-ς, ἐλύθη
'@
$repl = @'
ἔλυσα, ἔλυσας, ἔλυσε → ἐλύθην, ἐλύθης, ἐλύθη
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
forma słowa, jego temat i końcówki.
'@
$repl = @'
forma czasownika.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
jego końcówki muszą się różnić od końcówek form czynnych tego samego czasownika.
'@
$repl = @'
jego formy muszą się różnić od form czynnych tego samego czasownika.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
w jednym słowie, z końcówkami innymi niż w stronie czynnej.
'@
$repl = @'
w jednym słowie, różną od formy czynnej.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Oba odziedziczyły po wspólnym praindoeuropejskim przodku dwa pełne zestawy końcówek, czynny i medialno-bierny, i zachowały je we wszystkich czasach i trybach: greka λύ-ει → λύ-εται, sanskryt <em>bhara-ti</em> → <em>bhriya-te</em>.
'@
$repl = @'
Oba mają dwa pełne zestawy form czasownikowych, czynny i medialno-bierny, we wszystkich czasach i trybach: greka λύει → λύεται, sanskryt <em>bharati</em> → <em>bhriyate</em>.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Arabski i hebrajski zmieniają temat, ale zachowują końcówki czynne (<em>katab-tu</em> → <em>kutib-tu</em>). Turecki i japoński wstawiają jeden element i zachowują końcówki czynne (<em>yaz-dı-m</em> → <em>yaz-ıl-dı-m</em>).
'@
$repl = @'
Arabski i hebrajski mają bierne formy w jednym słowie tylko w niektórych czasach (<em>kataba</em> → <em>kutiba</em>); pozostałe czasy wymagają słowa posiłkowego i nie ma biernego trybu rozkazującego. Turecki i japoński wstawiają element, który tworzy nowy czasownik (<em>yazmak</em>, pisać → <em>yazılmak</em>, być pisanym); jego formy to formy czynne tego nowego czasownika, a nie zestaw tego samego czasownika.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Nowogrecki zachowuje własne końcówki tylko w czasie teraźniejszym (κοιτάζ-ω → κοιτάζ-ομαι); w czasie przeszłym końcówki są te same (κοίταξ-α → κοιτάχθηκ-α).
'@
$repl = @'
Nowogrecki ma bierne formy w jednym słowie w czasie teraźniejszym i przeszłym (κοιτάζω → κοιτάζομαι, κοίταξα → κοιτάχτηκα), ale jego perfektum wymaga słowa posiłkowego (έχω κοιταχτεί).
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
(martwię się) ma końcówki czynne,
'@
$repl = @'
(martwię się) ma formę czynną,
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in polish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
[System.IO.File]::WriteAllText($file, $t, $enc)
Write-Host "polish.tsx done"

$file = Join-Path $base "greek.tsx"
$t = [System.IO.File]::ReadAllText($file, $enc)
$find = @'
λύ-ω, λύ-εις, λύ-ει → λύ-ομαι, λύ-ῃ, λύ-εται
'@
$repl = @'
λύω, λύεις, λύει → λύομαι, λύῃ, λύεται
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
ἔλυσ-α, ἔλυσ-ας, ἔλυσ-ε → ἐλύθη-ν, ἐλύθη-ς, ἐλύθη
'@
$repl = @'
ἔλυσα, ἔλυσας, ἔλυσε → ἐλύθην, ἐλύθης, ἐλύθη
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
η μορφή της λέξης, το θέμα και οι καταλήξεις της.
'@
$repl = @'
η μορφή του ρήματος.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
οι καταλήξεις του πρέπει να διαφέρουν από τις καταλήξεις των ενεργητικών τύπων του ίδιου ρήματος.
'@
$repl = @'
οι τύποι του πρέπει να διαφέρουν από τους ενεργητικούς τύπους του ίδιου ρήματος.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
σε μία λέξη, με καταλήξεις διαφορετικές από τις ενεργητικές.
'@
$repl = @'
σε μία λέξη, διαφορετικό από τον ενεργητικό τύπο.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Και οι δύο κληρονόμησαν από τον κοινό ινδοευρωπαϊκό πρόγονό τους δύο πλήρη σύνολα καταλήξεων, ένα ενεργητικό και ένα μέσο-παθητικό, και τα διατήρησαν σε όλους τους χρόνους και τις εγκλίσεις: ελληνικά λύ-ει → λύ-εται, σανσκριτικά <em>bhara-ti</em> → <em>bhriya-te</em>.
'@
$repl = @'
Και οι δύο έχουν δύο πλήρη σύνολα ρηματικών τύπων, ένα ενεργητικό και ένα μέσο-παθητικό, σε όλους τους χρόνους και τις εγκλίσεις: ελληνικά λύει → λύεται, σανσκριτικά <em>bharati</em> → <em>bhriyate</em>.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Η αραβική και η εβραϊκή αλλάζουν το θέμα αλλά κρατούν τις ενεργητικές καταλήξεις (<em>katab-tu</em> → <em>kutib-tu</em>). Η τουρκική και η ιαπωνική παρεμβάλλουν ένα στοιχείο και κρατούν τις ενεργητικές καταλήξεις (<em>yaz-dı-m</em> → <em>yaz-ıl-dı-m</em>).
'@
$repl = @'
Η αραβική και η εβραϊκή έχουν παθητικούς τύπους σε μία λέξη μόνο σε ορισμένους χρόνους (<em>kataba</em> → <em>kutiba</em>)· οι άλλοι χρόνοι χρειάζονται βοηθητική λέξη, και δεν υπάρχει παθητική προστακτική. Η τουρκική και η ιαπωνική παρεμβάλλουν ένα στοιχείο που σχηματίζει νέο ρήμα (<em>yazmak</em>, γράφω → <em>yazılmak</em>, γράφομαι)· οι τύποι του είναι οι ενεργητικοί τύποι αυτού του νέου ρήματος, όχι σύνολο του ίδιου ρήματος.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Η νέα ελληνική κρατά δικές της καταλήξεις μόνο στον ενεστώτα (κοιτάζ-ω → κοιτάζ-ομαι)· στον αόριστο οι καταλήξεις είναι οι ίδιες (κοίταξ-α → κοιτάχθηκ-α).
'@
$repl = @'
Η νέα ελληνική έχει παθητικούς τύπους σε μία λέξη στον ενεστώτα και στον αόριστο (κοιτάζω → κοιτάζομαι, κοίταξα → κοιτάχτηκα), αλλά ο παρακείμενος χρειάζεται βοηθητική λέξη (έχω κοιταχτεί).
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Το <em>ανησυχώ</em> έχει ενεργητικές καταλήξεις,
'@
$repl = @'
Το <em>ανησυχώ</em> έχει ενεργητικό τύπο,
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in greek: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
[System.IO.File]::WriteAllText($file, $t, $enc)
Write-Host "greek.tsx done"

$file = Join-Path $base "spanish.tsx"
$t = [System.IO.File]::ReadAllText($file, $enc)
$find = @'
λύ-ω, λύ-εις, λύ-ει → λύ-ομαι, λύ-ῃ, λύ-εται
'@
$repl = @'
λύω, λύεις, λύει → λύομαι, λύῃ, λύεται
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
ἔλυσ-α, ἔλυσ-ας, ἔλυσ-ε → ἐλύθη-ν, ἐλύθη-ς, ἐλύθη
'@
$repl = @'
ἔλυσα, ἔλυσας, ἔλυσε → ἐλύθην, ἐλύθης, ἐλύθη
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
la forma de la palabra, su raíz y sus terminaciones.
'@
$repl = @'
la forma del verbo.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
sus terminaciones deben ser distintas de las terminaciones de las formas activas del mismo verbo.
'@
$repl = @'
sus formas deben ser distintas de las formas activas del mismo verbo.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
en una sola palabra, con terminaciones distintas de las activas.
'@
$repl = @'
en una sola palabra, distinta de la forma activa.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
Ambos heredaron de su antepasado indoeuropeo común dos conjuntos completos de terminaciones, uno activo y otro medio-pasivo, y los conservaron en todos los tiempos y modos: griego λύ-ει → λύ-εται, sánscrito <em>bhara-ti</em> → <em>bhriya-te</em>.
'@
$repl = @'
Ambos tienen dos conjuntos completos de formas verbales, uno activo y otro medio-pasivo, en todos los tiempos y modos: griego λύει → λύεται, sánscrito <em>bharati</em> → <em>bhriyate</em>.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
El árabe y el hebreo cambian la raíz pero conservan las terminaciones activas (<em>katab-tu</em> → <em>kutib-tu</em>). El turco y el japonés insertan un elemento y conservan las terminaciones activas (<em>yaz-dı-m</em> → <em>yaz-ıl-dı-m</em>).
'@
$repl = @'
El árabe y el hebreo tienen formas pasivas de una sola palabra solo en algunos tiempos (<em>kataba</em> → <em>kutiba</em>); los demás tiempos necesitan una palabra auxiliar, y no hay imperativo pasivo. El turco y el japonés insertan un elemento que forma un verbo nuevo (<em>yazmak</em>, escribir → <em>yazılmak</em>, ser escrito); sus formas son las formas activas de ese verbo nuevo, no un conjunto del mismo verbo.
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
El griego moderno conserva terminaciones propias solo en el presente (κοιτάζ-ω → κοιτάζ-ομαι); en el pasado las terminaciones son las mismas (κοίταξ-α → κοιτάχθηκ-α).
'@
$repl = @'
El griego moderno tiene formas pasivas de una sola palabra en el presente y en el pasado (κοιτάζω → κοιτάζομαι, κοίταξα → κοιτάχτηκα), pero su perfecto necesita una palabra auxiliar (έχω κοιταχτεί).
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
$find = @'
(me preocupo) tiene terminaciones activas,
'@
$repl = @'
(me preocupo) tiene forma activa,
'@
if ($t.Contains($find)) { $t = $t.Replace($find, $repl) } else { Write-Host "NOT FOUND in spanish: " $find.Substring(0, [Math]::Min(50, $find.Length)) }
[System.IO.File]::WriteAllText($file, $t, $enc)
Write-Host "spanish.tsx done"

