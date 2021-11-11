# support-zaf-app-toolbox

support-zaf-app-toolbox package delivers a bunch of useful methods, hooks and components that help you build React apps integrated with Zendesk Support quicker and with less effort. They use Zendesk's App Framework(ZAF) Client under the hood.

### Hooks

#### `useClientGet(path)`

  Gets data asynchronously for a given path. Uses [client.get](https://developer.zendesk.com/apps/docs/core-api/client_api#client.getpaths) under the hood. For a complete list of supported paths, see:

  - [Core Apps API](https://developer.zendesk.com/apps/docs/core-api/core_api)
  - [Sell Apps API](https://developer.zendesk.com/apps/docs/apps-sell-api/introduction)

  Arguments:

  - path: string

  Example:

  ```javascript
  useClientGet('deal.id')
  ```

  Returns:

  ```javascript
   {
     data: { deal.id: '1' },
     error: null,
     feedback: { status: 'success' }
   }
  ```

#### `useClientHeight(height)`

  Changes an app height. Calls [resize](https://developer.zendesk.com/apps/docs/core-api/core_api#resize) action under the hood.

  Arguments:

  - height: number - specifies a height for an app in px

  Example:

  ```javascript
  useClientHeight(300)
  ```

#### `useClientInvoke(name, ...options)`

  Executes an action identified by the name path parameter.
  Use [client.invoke](https://developer.zendesk.com/apps/docs/core-api/client_api#client.invokename--...args) under the hood.

  Arguments:

  - name: string - the path to call
  - options: object (optional) - arguments to be passed to the call

  Example:

  ```javascript
  useClientInvoke('formatDate', new Date('2019-07-22')
  ```

  Returns:

  ```javascript
   {
     data: "22/07/2019",
     error: null,
     feedback: { status: 'success' }
   }
  ```

#### `useClientRequest(url, options, dependencies, cacheKey)`

  Dispatches network requests via the Zendesk Apps framework.
  Uses [client.request](https://developer.zendesk.com/apps/docs/core-api/client_api#client.requestoptions) under the hood.

  Arguments:

  - url: string - the url of the resource to request
  - options: object - additional parameters send with the request
  - dependencies: array (optional) - prevents by making a request if a dependency is not met
    and limits the request execution so that the request is made only if a dependency value changes
  - cacheKey: string (optional) - an unique string value that request should be cached for

  Example:

  ```javascript
  useClientRequest(
    'www.example.com',
    {
      data: { keyExample: 'Value Example' },
      dataType: 'json',
      contentType: 'application/json',
    },
    [],
  )
  ```

  Returns:

  ```javascript
   {
     data: { keyExample: [] },
     error: null,
     feedback: { status: 'success' }
   }
  ```

#### `useClientRequestWithAuth(url, options, dependencies, cacheKey)`

  Uses `useClientRequest` under the hood, but additionally passes extra parameters which are required to make authenticated requests:
  
  ```javascript
  const options = {
    secure: true,
    headers: {authorization: 'Bearer {{setting.access_token}}'},
    ...otherOptions,
  }
  ```

  Example:

  ```javascript
  useClientRequestWithAuth(
    'www.example.com',
    {
      data: {
        keyExample: 'Value Example',
      },
    },
    [],
  )
  ```

  Returns:

  ```javascript
   {
     data: { keyExample: [] },
     error: null,
     feedback: { status: 'success' }
   }
  ```

#### `useSellContactEmail()`

  Asynchronously gets Sell contact email based on current location.

  Example:

  ```javascript
  useSellContactEmail()
  ```

  Returns:

  ```javascript
   {
     data: 'email@example.com',
     error: null,
     feedback: { status: 'success' }
   }
  ```

### Formatters

#### `useFormattedDate(date)`

  Formats a given date respecting **user and account settings**. If the API throws an error, the date will be formatted according to local timezone.

  Arguments:

  - date: [Javascript Date instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), a string or a number

  Example:

  ```javascript
  useFormattedDate(new Date())
  ```

  Returns:

  ```javascript
  '10/01/2019'
  ```

#### `useFormattedDateTime(date)`

  Formats a given date-time respecting **user and account settings**. If the API throws an error, the date-time will be formatted according to local timezone.

  Arguments:

  - date: [Javascript Date instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), a string or a number

  Example:

  ```javascript
  useFormattedDateTime(new Date())
  ```

  Returns:

  ```javascript
  '10/01/2019 04:22 PM'
  ```

#### `useLocalDateFormat(date)`

  Formats a given date according to a local timezone. No error handling support.

  Arguments:

  - date: [Javascript Date instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), a string or a number

  Example:

  ```javascript
  useLocalDateFormat(new Date())
  ```

  Returns:

  ```javascript
  '10/01/2019'
  ```

#### `useLocalDateTimeFormat(date)`

  Works the same as `useLocalDateFormat(date)` but returns string with date-time instead of date.

#### `useFormattedCurrency(amount, currency)`

  Formats a given amount respecting **user and account settings**. If the API throws an error, only the amount to format will be returned.

  Arguments:

  - amount: string or number - an amount to format
  - currency: string (optional) - a currency code. To specify a currency, use ISO 4217 currency codes such as 'USD' for US dollars or 'EUR' for Euros. See the [Current currency & funds code list](https://www.currency-iso.org/en/home/tables/table-a1.html).
    If you don't specify one, the currency defaults to the account's currency.

  Example:

  ```javascript
  useFormattedCurrency(100.01)
  ```

  Returns:

  ```javascript
  '$100.01'
  ```
