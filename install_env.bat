@echo off
setlocal enabledelayedexpansion

if exist "%~dp0miniconda" (
    echo Miniconda 已存在,跳过安装步骤。
) else (
    echo 正在下载 Miniconda...
    powershell -Command "(New-Object Net.WebClient).DownloadFile('https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe', 'miniconda_installer.exe')"

    echo 正在安装 Miniconda...
    start /wait "" miniconda_installer.exe /InstallationType=JustMe /RegisterPython=0 /S /D=%~dp0miniconda
    del miniconda_installer.exe
)

set "PATH=%~dp0miniconda;%~dp0miniconda\Scripts;%~dp0miniconda\Library\bin;%PATH%"

echo 正在创建 AI-chatbot 环境...
call conda create -y -n AI-chatbot python=3.9

call conda activate AI-chatbot

echo 正在安装依赖...
pip install -r requirements.txt

echo 安装完成!
pause