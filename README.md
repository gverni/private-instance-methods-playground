# private-instance-methods-playground

# Transpile

To transpile use: 

`yarn build`

To run the transpiled version use: 

`node dist/private-instance-methods.js` 

The output should be: 

`Happy Birthday! You are 20`

# lint error

To reproduce lint error use:

`yarn lint`

the following error will be shown: 

`  4:6  error  'increaseAge' is not defined  no-undef`

See issue https://github.com/babel/babel-eslint/issues/746
