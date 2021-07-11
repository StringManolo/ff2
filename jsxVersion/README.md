# JSX Version

### How to:
- Install typescript compiler
```
npm install -g typescript
```
- Develop your proyect in the Dev folder.
```
cd dev
```
- Create a compile folder at same level as Dev folder (not into)
```
cd ../ && mkdir compile
```
- Copy all your dev files in the compiled folder
```
cp dev/* compile -r
```
- Compile the Dev folder into the compile folder
```
npx tsc 
```
- Serve your proyect
```
cd compile && pserv 3000
```
- Watch your project Live
```
http://127.0.0.1:3000
```


