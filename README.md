# 简单实现localStorage与sessionStorage读取收集依赖，设置触发依赖
## 实例化:
```
const reactiveSessionStorage = new ReactiveStorage('sessionStorage')； 
const reactiveLocalStorage = new ReactiveStorage('localStorage');
```
### API
```
reactiveSessionStorage.getItem(key,(res)=>{})

reactiveSessionStorage.setItem(key,value)

reactiveSessionStorage.watch(key,callBack)
```