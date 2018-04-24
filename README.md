# Zero Database

A Production Database.

<http://zerodatabase.com/>

Just need a database for your company, mobile app, game, ect. and don't want to
setup your own server? See <http://zerodatabase.com/hosts> for a list of
approved hosts.

Want to get Zero Certified? See <http://zerodatabase.com/certified> to take the
test. Get your certificate at no charge.

Become an approved host by taking our test: <http://zerodatabase.com/host_certified>.
Get our stamp of approval at no charge.

Like our product? Consider [donating](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=brandondyer64@gmail.com&lc=GB&item_name=Zero%20Database&currency_code=USD&no_note=0&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest)!

## Branches

### Canary

Use the canary branch if you want full blown, bleeding edge, super mega, action
packed features. It's the branch we use to test out features before they're
put on master.

* Personal projects
* Development
* Feature testing

### Master

The master branch contains the latest release. It is our primary branch, and
it's the one we recommend most organizations use.

* Business databases
* Hospital databases
* Application APIs

**Note:** There are settings and configurations that allow you to further
adjust the balance between convenience and reliability.

## Running Dev Environment

### Web

Move to `[zero]/web`.

```bash
npm install
npm run start
```

The React app should now be running on <http://localhost:3000>.

### API

Move to `[zero]/api`.

```bash
npm install
npm run start
```

The Express API should now be running on <http://localhost:9000>. Visiting the
link in a browser should produce: `Hello World!`
