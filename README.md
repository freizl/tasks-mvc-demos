# Draft

[notes & ideas](https://docs.google.com/drawings/d/1ceDaqPI6AMKoHc--qio_W8lTkX_OHU85sOYhfljvCNI/edit?usp=sharing)

## MVC / MVP / MVVM

### Why shall View "interactive" with Model
Case One: an complex form that visibility of some fields depend on other fields' value. The implementation would be User interactive with `View`, and `View` set value to `Model`. `View` reflect changes from `Model` by updating its display.

## Templates
  - shall have
    - include (partial) another file
    - inherintence / override
  - mustache and handlerbars doest have both
  - dust looks good
  - is React.js fit well as template or think it more as `View`?
  -

## Some combinations?
  - Backbone + Reactive
  - React + Reactive
  - Elm
  - etc...

## Design

```
/tasks/   GET
/task/:id GET
/task/:id POST
/task/:id PUT
/task/:id DELETE
```

```{.haskell}
data Task = Task
  { Name :: String
  , Description :: String
  , Priority :: Number
  , Deadline :: Date
  , SendTextMessage :: Boolean
  , PhoneNumber :: Maybe String
  , Tag :: [String]
  , StoryPoint :: Number
  }

data Priority = High | Medium | Low

```
