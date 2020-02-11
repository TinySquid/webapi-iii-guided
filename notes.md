# Middleware Notes

## Quote

> "Whenever I have to **think** to understand what the code is doing, I ask myself if I can **refactor** the code to make that understanding more immediately apparent."
>
> &mdash; Martin Fowler

## Jargon

_"Refactoring"_

## Middleware

There are two types

- normal
- error handling

Can come from different sources:

- built-in: included with express
- third party: need to be installed separately
- custom: we write it!

We can use it:

- globally: it runs on every request to any endpoint.
- locally: is only applied to a specific endpoint or group of endpoints

Middleware can:

- inspect the `request` and `response` objects
- make changes to the `request` and response `objects`
- move the `request` or `response` object to the _next_ middleware in the queue
- stop the request and send back a response to the client

** order matters! **

Git Post-Lecture

- create new **empty** repository on GitHub
- `git remote rm origin`
- `git remote add origin url to our new repository
- `git add .
- `git commit -m "commit message"`
- `git push -u origin master` // sets origin remote and master branch as default when pushing.

After using `-u` we can push using `git push`, no need for `origin master`
