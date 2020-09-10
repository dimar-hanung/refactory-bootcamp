from setuptools import setup, find_packages

setup(
    name='cliweather_dimar', # beri nama openweater_yourname
    version='0.1',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'Click',
        # tambahkan package yang kalian gunakan untuk membangun aplikasi disini!
    ],
    # buatlah nama app nya cliweather
    entry_points='''
        [console_scripts]
        cliweather=main:cli
    ''',
)