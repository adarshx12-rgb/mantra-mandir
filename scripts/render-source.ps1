param([int]$Start = 0, [int]$Count = 3, [int]$Width = 1200)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[Windows.Storage.StorageFile,Windows.Storage,ContentType=WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument,Windows.Data.Pdf,ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream,Windows.Storage.Streams,ContentType=WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfPageRenderOptions,Windows.Data.Pdf,ContentType=WindowsRuntime] | Out-Null
$genericAwait = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetGenericArguments().Count -eq 1 -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' } | Select-Object -First 1
function Await-Result($Operation, $ResultType) {
  $task = $genericAwait.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}
$sourceFile = Await-Result ([Windows.Storage.StorageFile]::GetFileFromPathAsync('C:\Users\ADARSH\Downloads\hindi Book- mantras.pdf')) ([Windows.Storage.StorageFile])
$document = Await-Result ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($sourceFile)) ([Windows.Data.Pdf.PdfDocument])
Write-Output "PDF pages: $($document.PageCount)"
$outDir = Join-Path (Get-Location) 'output/source-pages'
New-Item -ItemType Directory -Path $outDir -Force | Out-Null
for ($index = $Start; $index -lt [Math]::Min($Start + $Count, $document.PageCount); $index++) {
  $page = $document.GetPage($index)
  $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
  $options = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $options.DestinationWidth = $Width
  $action = $page.RenderToStreamAsync($stream, $options)
  $actionAwait = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' } | Select-Object -First 1
  $actionAwait.Invoke($null, @($action)).Wait()
  $readStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream)
  $path = Join-Path $outDir ('page-{0:D3}.png' -f ($index + 1))
  $fileStream = [System.IO.File]::Create($path)
  $readStream.CopyTo($fileStream)
  $fileStream.Dispose()
  $readStream.Dispose()
  $page.Dispose()
  Write-Output $path
}
