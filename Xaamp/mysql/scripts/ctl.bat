@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop


"D:\Documents\Side project website\Xaamp\mysql\bin\mysqld" --defaults-file="D:\Documents\Side project website\Xaamp\mysql\bin\my.ini" --standalone
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "D:\Documents\Side project website\Xaamp\killprocess.bat" "mysqld.exe"

if not exist "D:\Documents\Side project website\Xaamp\mysql\data\%computername%.pid" goto finish
echo Delete %computername%.pid ...
del "D:\Documents\Side project website\Xaamp\mysql\data\%computername%.pid"
goto finish


:error
echo MySQL could not be started

:finish
exit
