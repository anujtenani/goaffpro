# GoAffPro - Affiliate marketing


[Roadmap](https://github.com/anujtenani/goaffpro/projects/3)

[Issue Tracker](https://github.com/anujtenani/goaffpro/issues)

[Wiki](https://github.com/anujtenani/goaffpro/wiki)


## Client SDK
To integrate with your ecommerce store

### Step 1
To load client SDK on your pages. Must be added to all the pages. Replace public-api-key with the given api key from the admin interface
```javascript
 (function () {
      let q = [];
      if(!window.Goaffpro){
          window.Goaffpro = function(){
             q.push(arguments);
          }
      }
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://static.goaffpro.com/client_sdk.js';
      s.onload = ()=>q.forEach((item)=> Goaffpro.apply(null, item))
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
  })();
   // execute your script immediately here
    Goaffpro('init', 'public-api-key');
    Goaffpro('track-visit');
```

### Step 2
To track conversion from the order thank you page. The data object to pass must conform to the schem described below
```javascript
Goaffpro('track-conversion', { 
  id:42
  total: 99,
  ...
});

```

### Schema

Example
``` json
{
  "id":"string"
   ""
}
```

Details
| Name | Type | Description | Required
--------------------------------------
| id | String | The internal ORDER ID | ❌
| number | String | The ORDER number | ✅ 
| subtotal_price | Number | The Order Subtotal (i.e after discounts but before shipping and taxes |  ❌
| total_price | Number | The Order total (i.e. after discounts, shipping and taxes | ✅ 
| total_discounts | Number | The total discount given on the order | ❌
| email | String | The email address of the customer | ❌


