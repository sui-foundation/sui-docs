---
title: Style Guide
slug: /style-guide
---

# Sui Foundation | Sui Docs Content Style Guide

Version .1 Published 2023-05-04

This document defines the styles, word and term usage, and content formatting for Sui documentation. Entries are in alphabetical order. A style guide is never finished. Expect continued iterations to add additional styles, additional information to existing styles, and infrequently a change to an existing style.


## Contribute to the style guide

The style guide is a living document and should be updated as new cases or needs arise. To suggest updates to the style guide, please contact Wayne Cunningham, Sui Foundation Staff Technical Content Manager.


## Accessibility

Reference works for making content accessible:
* [A11Y Style Guide](https://a11y-style-guide.com/style-guide/)
* [Bitsofcode Accessibility Cheatsheet](https://bitsofco.de/the-accessibility-cheatsheet/)
* [Atlassian Design System - Inclusive writing reference](https://atlassian.design/content/inclusive-writing)
* [MailChimp’s writing style guide](https://styleguide.mailchimp.com/writing-for-accessibility/)
* [Microsoft Style Guide Accessibility Terms](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/accessibility-terms)
* [Writing for All Abilities](https://learn.microsoft.com/en-us/style-guide/accessibility/writing-all-abilities) (Microsoft Style Guide)

### Formatting
Don’t use color or special symbols to add emphasis to text. Screen readers are designed to interpret bold (`<strong>`) and italic (`<em>`) in web pages.

### Images
Add captions and alt text that describe the image for someone using a screen reader. What are the important details in the image that someone using a screen reader can’t see?

Use alt text to describe what the image shows. Use the caption to explain why the image is meaningful in the context of the page.

An image is not a substitute for text; images should only supplement text. Do not rely on an image to convey information not in text form. For example, an image of a table of values does no one any good if the image fails to display for a host of possible reasons.


## Acronyms

Spell out a term or phrase on first use in a topic, followed by the acronym in parentheses. Then use the acronym for subsequent mentions.

**Example**
> You can mint non-fungible tokens (NFTs) using your Sui Wallet. To view an NFT after you mint it, click the NFTs tab of your wallet.


## Alerts, notes, callouts

Use alerts or notes to add emphasis to information. Use sentence case for the admonition type (Note, Warning) and include the colon in bold.

### Important

Use Important to convey information to help the reader avoid an error or unexpected outcome.

**Example**

> **Important:** You must clone the latest version of the Sui repo before you run the Docker script.

**Markdown**

```
**Important:** You must clone the latest version of the Sui repo before you run the Docker script.
```

### Note

Use Note to add emphasis to information that the reader should know, but could be overlooked when scanning a topic or document. Provide information that prevents users from getting stuck.

**Example**
> Note: The system processes updates only once every 24 hours at UTC 00:00.

**Markdown**
```
**Note:** The system processes updates only once every 24 hours at UTC 00:00.
```

### Warning
Use Warning when the information could cause the user to lose data or to start over. If you instruct a user to delete something, warn them about what happens when they delete it.

**Example**
> Warning: Backup your configuration files before you delete your network.

**Markdown**
```
**Warning:** Backup your configuration files before you delete your network.
```

## Capitalization

**Do:**

Use sentence capitalization for section headings, table cells, list items, captions, alt text, and error messages.

Capitalize proper nouns. [Proper nouns](#proper-nouns).

Always capitalize the first word of a new sentence, even when the word is normally lower case, such as Web3 vs web3.

**Don’t:**

Don't use all uppercase for emphasis, use bold instead. (IMPORTANT vs Important)

Don't use bi-capitalization / internal capitalization unless it is part of a brand, such as YouTube or DreamWorks.

Don't capitalize the spelled-out form of an acronym unless it's a proper noun, such as HyperText Markup Language (HTML).

When words are joined by a slash, capitalize the word after the slash if the word before the slash is capitalized.

**Example**
> Country/Region

> Turn on the On/Off toggle.


### Title capitalization
For title capitalization, follow these guidelines:

* Don't capitalize a, an, and, but, for, in, or, so, to, with, yet , or other short conjunctions and prepositions unless it’s the first or last word
* Capitalize all other words (including Is and Be as they are verbs)
* Capitalize the word after a hyphen
* Match casing for commands or special terms, such as cURL or dApp.
* Match the casing for API elements and programming language keywords


## Code
Use inline code in a sentence to refer to functions and other code pieces. Use codeblocks to show larger sections of a program. All code should be written exactly as it appears in a code editor, so that other people can copy and paste it from documentation directly into a code editor. Do not use images to show code.

### Inline code
Use backticks (`) around individual code within a sentence, which will format it as code in markdown. Do not use quotes, emphasis, or any other formatting to distinguish code from surrounding text.

**Example**

> The `display::new<T>` call creates a `Display`.

**Markdown**
```
The `display::new<T>` call creates a `Display`.
```

### Codeblocks
Use the text before a codeblock to describe what the codeblock does. Use text after the codeblock to point out particular elements in the code and how they work. Do not use codeblocks as a substitute for descriptive text. Codeblocks help readers understand descriptive text in the documentation.

Column One Column Two Column Three Column Four Metric name 10 X Text string.

**Example**
```
module sui::display {
/// Sets multiple fields at once
public fun add*multiple(
self: &mut Display,
keys: vector`<String>`,
values: vector`<String>`
) { /* ... \*/ }
```


## Grammar

### Active voice
Use Active voice whenever possible. Active voice is direct, clear, and uses fewer words. Passive voice is often less clear, awkward, and uses more words.

**Example**

> **Active:** She installed the software.

> **Passive:** The software was installed by her.

### Verbs
Use present tense verbs with the appropriate mood.

There are three grammatical moods:

* **Indicative –** used to deliver facts
* **Imperative –** used to provide directions
* **Subjunctive –** used to convey a wish or possibility

#### Verb moods
Use indicative verbs most of the time in conceptual content.

Reference Style Guides Write the Docs Style Guide article GitLab Style Guide - managed as a community project Digital Ocean Style Guide SUSE Style Guide Microsoft Style Guide Google Developer Style Guide CDN Language and Style Reference

**Example**

* **Indicative –** The Sui Explorer displays transactions on the network.
* **Imperative –** Open Sui Explorer to view transactions on the network.
* **Subjunctive –** We suggest that you view your transaction in Sui Explorer after you complete a transfer.

### Person
Use second person in most cases.

**Example**
> You can view transaction history in Sui Explorer.

**Rather than:**
> We can view transaction history in Sui Explorer.

### Present tense
Use present tense whenever possible. Use future tense (something will happen) only for events that occur on a future date, such as a product release or trade show.

Do not use future tense when describing a product, or providing guidance in tasks. From the user perspective, it is the present for them when they follow the steps in a task. Consider the example of saving a file.

**Example present tense**
> Click Save to save the updated file.

> When you click Save, your device writes the changes to disk.
> To save a file after you modify it, click Save.

**Example future tense**

> Your changes will be saved when you click Save.

While this is technically accurate, it separates the person from the object of the action. This makes it more difficult to parse the sentence for ESL speakers, and is harder to localize.

> When you click Save, the file will be written to disk.

In this example, when will the file be written to disk? It happens immediately upon clicking Save. If you check the timestamp on the file, the time reflects the moment at which you clicked Save, not a time after that moment.

### Oxford / serial commas
Do use serial commas.

**Example**
> Rachael Ray finds inspiration in cooking, her family and her dog.

**It is much more clear to use:**
> Rachael Ray finds inspiration in cooking, her family, and her dog.

**Example**
> You must install Cargo, Rust, Docker, and the Sui CLI to create a Sui node.

## Headings and titles
Use descriptive titles that include keywords to help readers find the information. Use shorter titles in the navigation pane.

### Optimize for discoverability
Use enough words in headings and titles to make it easy to know which link to click on a search results page. One word titles (Installing) do not provide enough information to determine the contents of a topic.

### Topic titles
Users search for information to complete a specific task, so help them identify the topic that helps them by using descriptive titles. For example, _Get Started_. Get started with what? If there are multiple products or programs available it could be anything.

_Get Started with Sui_ is better, but users want to get started with a specific task or user journey with Sui. Instead of _Get Started with Sui_, describe the specific task or journey, such as _Create a Sui Full Node_ or _Sui Validator Guide_. Use Get Started as a heading on the Documentation landing page to categorize tasks for new users.

**Example**
> This is a Topic Title

**Markdown**
```
## title: This is a Topic Title
```

### Section headings
Use sentence casing for section headers.

**Example**
> This is a section heading

**Markdown**
```
## This is a section heading
```

## title: This is a Topic Title
Only use images and screenshots to supplement and help explain text. Images do not replace text. Readers should be able to understand the documentation without the images. However, images can help readers understand the text more clearly.

### Image format
Use .png when possible, otherwise use .jpg

### Image resolution
Images should be at least 400 pixels wide. If an image looks blurry when uploaded, try making a new image in higher resolution.

### Captions
Use alt text to describe what the image shows. Use the caption to explain why the image is meaningful in the context of the page. See Accessibility considerations for captions.

### Mermaid for images in Markdown
You can create flowcharts and similar images directly in Markdown.

[https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/)

Use [Snagit](https://www.techsmith.com/screen-capture.html) or other tools to capture screenshots.

## Lists
Use a list for a series of items or steps instead of writing them as a sentence. Introduce the list with a description of the list elements ending in a colon (:).

**Instead of:**

The Build section of the documentation includes topics about: Building with Sui, Using the CLI to Start a Network, Creating Smart Contracts, Sui Tutorial, and Sui Examples.

**Use:**

The Build section of the documentation includes the following topics:
* Building with Sui
* Using the CLI to Start a Network
* Creating Smart Contracts
* Sui Tutorial
* Sui Examples

### Numbered or ordered lists
Use a numbered list when:
* the items in the list must be performed in a specific order, such as the steps in a task
* the items in the list describe a sequence of events, such as a workflow or scenario

**Example**
1. Create a fork of the repo.
1. Clone your fork of the repo.
1. Install Sui.

**Markdown**
```
1. Create a fork of the repo.
1. Clone your fork of the repo.
1. Install Sui.
```

### Bulleted lists
Use bulleted lists to list more than two pieces of related information, such as links or terms, that don’t need to be in a specific order. Optionally, use a bulleted list for only two items to include a description of the items in the list. Use sentence capitalization in lists, and use punctuation consistently for all list items. Do not use an ending period unless the list item includes a full sentence.

**Example** See the following articles to learn more:
* Link to article1
* Link to article2

Sui Explorer supports the following browsers:
* Firefox version X or later
* Chrome version X or later
* Edge version X or later

SUi offers the following benefits:
* **Benefit A-** Description of Benefit A of Sui.
* **Benefit B-** Description of Benefit B of Sui.

**Markdown**
```
* **Benefit A** - Description of Benefit A of Sui.
* **Benefit B** - Description of Benefit B of Sui.
```

### Term list
Use a term list to define terms or concepts.

**Example**
> **Term:** A description of the term.

> **DAG:** A directed acyclic graph (DAG) is a data modeling or structuring tool typically used in data architectures.

**Markdown**
```
**Term:** A description of the term.
**DAG:** A directed acyclic graph (DAG) is a data modeling or structuring tool typically used in cryptocurrencies.
```
### Capitalization in lists
Use initial / sentence capitalization in list items.

**Example - bulleted list**
* First list item
* Second list item

**Markdown**
```
* First list item
* Second list item
```

**Example - numbered list**
1. First list item
2. Second list item

**Markdown**
```
1. First list item
1. Second list item
```

## Numbers
### Numerals vs. words
Write out numbers less than 10

**Example**
> The folder contains seven files.

Use digits for larger numbers.

**Example**
> The folder contains 24 files.

In body text, use numbers consistently if using both numbers less than and greater than 10.

**Example**
> One folder contains 7 files, and the other contains 24 files.

For ease of reading, use both words and numbers when you use two numbers for different things together.

**Example**
> The folder contains twenty 12-page documents.

Don’t start a sentence with a numeral. Instead, add a qualifier or spell out the number.

**Example**
> At least 20 pieces of candy fell off the table.
> Twenty pieces of candy melted.

Measurements should be written as numerals.

**Example**
> The server processes 2 terabytes of data in 8 milliseconds.

## Links
Use the topic title of the target topic as the link text for the link in a list or "Learn more" sentences. Do not use a URL as the link text.

**Example**
> To learn more, see [Examples of Sui Smart Contracts](https://docs.sui.io/explore/examples).

**Markdown**
```
To learn more, see [Examples of Sui Smart Contracts](https://docs.sui.io/explore/examples).
```

Use keywords from the target topic title when using links inline.

**Example** Before you install Sui, make sure to install the [prerequisites](https://docs.sui.io/build/install#prerequisites).

**Markdown**
```
Before you install Sui, make sure to install the [prerequisites](https://docs.sui.io/build/install#prerequisites).
```

## Procedures / Tasks / Instructions
Introduce a procedure with an infinitive verb. Format procedures using a numbered or ordered list.

**Example** To get the latest version of the Sui Wallet extension:

1. Open Google Chrome.
1. Click **Extensions**, then click **Manage Extensions**.
1. Click **Details** for the Sui Wallet extension, then click **View in Chrome Web Store**.

**Markdown**
```
To get the latest version of the Sui Wallet extension:

1. Open Google Chrome.
1. Click **Extensions**, then click **Manage Extensions**.
1. Click **Details** for the Sui Wallet extension, then click **View in Chrome Web Store**.
```

### Keyboard keys in procedures
When you provide instructions to press keyboard keys, such as Press **Enter** to continue, use uppercase for the key name and format the key name as bold text.

## Proper nouns
Capitalize proper nouns throughout.

Proper nouns include:
* Names of people (Bob Ross)
* Named places, such as a city (San Francisco) or a train station (Union Station)
* Products (Slack) and services (Google Play)
* Trademarks, such as Coca-Cola
* Book titles, such as The Move Book
* Standards or technologies, such as Local Area Network (LAN)

**Example**
> Sui Explorer

## Product names
Product names are proper nouns. Capitalize all words of a product name. When referring to a product, use only the product name without “the”. When referring specifically to a Sui wallet, use Sui Wallet or Ethos Wallet and not just wallet. Users likely have multiple wallets, and we want to make it clear which wallet. Use wallet generically when referring to the concept of a wallet.

**Example**
> There are several types of wallets to choose from.

> Never share the recovery passphrase for your wallet with anyone.

> The Sui network supports the following wallets:
* Sui Wallet
* Ethos Wallet
* Coinbase Wallet

**Example**
> Sui Explorer

> Sui Wallet

**Example**
> You can mint an NFT directly from your Sui Wallet.

> Find transaction details in Sui Explorer.

> After you complete a transaction in your Sui Wallet, view details about the transaction on Sui Explorer.

## Slashes
Avoid using slashes in place of "and" or "or", such as True / False or True/False. Use True or False, or True | False in code documentation.

If you do use a slash, include a space between the term and slash.

When using fractions, use no spaces, for example 3/4.

## Spelling
Use US English spelling in source content.

## Tables

### Table headings
Capitalize the first word in the heading. Center align the text. Bold labels in the Header row.

**Example**

| **Column one** | **Column two** | **Column three** | **Column four** |
|:-------------- |:--------------:|:----------------:|:--------------- |
| Metric name    |       10       |        X         | Text string.    |

**Markdown**
```    
| **Column one** | **Column two** | **Column three** | **Column four** |
```

### Table alignment
Center align labels in the Heading row. Left align strings of text. Center align values and Xs or checkmarks.

**Example**

| **Column one** | **Column two** | **Column three** | **Column four** |
|:-------------- |:--------------:|:----------------:|:--------------- |
| Metric name    |       10       |        X         | Text string.    |

**Markdown**
```
| **Column one** | **Column two** | **Column three** | **Column four** |
| :--- | :---: | :---: | :--- |
```

### Table text
Follow style guidelines for regular body text.

## UI elements
Format UI elements, such as field labels, button names, and menu commands, in bold text. Always match the exact text or label of the UI element, including capitalization. Do not include special characters, such as ellipses, if included in the element label.

**Example**
> To open a different file, click File > Open FIle.

**Example**
> Click **More Transactions** to open the **Transactions** page.

## URLs and web addresses
Add text and create a link to a site or URL. Provide the URL only when a reader needs to copy it, such as in example code or configuration files.

## Word choice

### Referring to pages in our docs
Refer to pages in the documentation set as “topic”s. A “guide” can comprise many related topics.

**Example**
> See the Install topic in the Validator guide for more information.

**Note:** You can also just refer to a topic by title where it makes sense. See Installing Sui for more information.

### General considerations
* Use simple words, concise sentences
* Don't use common words in new ways
* Use technical terms carefully
* Avoid jargon

### Contractions
Optionally use contractions to provide a more conversational tone. It’s OK to use them inconsistently. Be mindful that they can be confusing to non-native speakers.

## New section template (Heading 2)
Describe the section.
### Subsection or category (Heading 3)
Describe the additional entry.

**Example**
> Indented example for the section. (Normal text, indented)

**Markdown** Indented example for the section. (Roboto Mono Light)

## Reference Style Guides {#reference-style-guides}

* [Write the Docs Style Guide article](https://www.writethedocs.org/guide/writing/style-guides/)
* [GitLab Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/index.html) - managed as a community project
* [Digital Ocean Style Guide](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)
* [SUSE Style Guide](https://documentation.suse.com/en-us/style/current/single-html/docu_styleguide/#sec-techwriting)
* [Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/welcome/)
* [Google Developer Style Guide](https://developers.google.com/style)
* [CDN Language and Style Reference](http://cdn.static-economist.com/sites/default/files/pdfs/style_guide_12.pdf)

```

```
