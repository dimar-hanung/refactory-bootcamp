from setuptools import setup

setup(
    name='main',
    version='0.1',
    py_modules=['main'],
    install_requires=[
        'Click',
    ],
    entry_points='''
        [console_scripts]
        main=main:cli
    ''',
)