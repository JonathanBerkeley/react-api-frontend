[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)
# React API Frontend
Version 0.3.2    
Frontend for a videogame database    

## Former domains (No longer hosted)     
Frontend: https://mainuser.dev    
Backend: https://api.mainuser.dev    
Swagger (unstable): https://mainuser.dev/swagger/dist/index.html    
API Docs: https://github.com/JonathanBerkeley/advjs-api-backend#get-requests    

# Project styleguide

### General
- No semicolon termination
- ES imports
- Newline between functions / classes / logical blocks
- Foreign imports seperated from local imports
- 4 spaces indentation, 2 spaces indentation for .css
- ```// Space at beginning of line comment```

### Naming    
```js
const CONSTANT_GLOBAL    
static CONSTANT_STATIC    

var localVariable    
const localConst    
let blockVariable    
let #_privateVariable    

let longLiteralNumber = 1_000_000    
```

### Functions
```js
// File global
function PascalCase(args) {
    // Code
}

// Otherwise
const functionPtr = () => {
    // Code
}
```

### Classes
- Prefer static over singleton    
- Object oriented style    
```js
class PascalCase {
    // Code
}
```
