![Work Report](../../image/baner/Untitled-1.jpg)
---
<h3 align="right"><b>فصل دوم 🔹</b></h3>
<h3 align="right"><b>قسمت:ششم 🎬</b></h3>
<h3 align="right"><b>۱۴۰۴/۰۹/۲۵ 📆</b></h3>


<h3 align="right"><b>"Creating text nodes and element nodes"</b></h3>

###### Home
> [توضیحات](#1) - [چیزهایی که یاد گرفتم](#2) - [سوالات و مشکلات](#3) - [کد ها و خروجی ها](#4)

---
###### 1
### 🔍 توضیحات
- در جاوااسکریپت می‌توان DOM را به‌صورت پویا با استفاده از توابع مختلف دست‌کاری کرد. تابع document.createElement() برای ایجاد نودهای المنت و تابع document.createTextNode() برای ساخت نودهای متنی استفاده می‌شود. توابع before، prepend، append و after امکان اضافه کردن نودها را نسبت به یک المنت مشخص فراهم می‌کنند. همچنین با استفاده از متد insertAdjacentHTML() و موقعیت‌هایی مانند beforebegin، afterbegin، beforeend و afterend می‌توان محتوا را با دقت بیشتری در بخش‌های مختلف DOM درج کرد. برای حذف نودها از متد node.remove() استفاده می‌شود و متد elem.cloneNode() امکان کپی کردن المنت‌ها را به‌صورت سطحی یا عمیق فراهم می‌کند. علاوه بر این، DocumentFragment به‌عنوان یک ظرف سبک برای نگهداری موقت چند نود به کار می‌رود و باعث افزایش کارایی با کاهش تغییرات مستقیم روی DOM می‌شود.
> [Home](#home)
---
###### 2
## 🧠 چیزهایی که یاد گرفتم
- Creating element nodes using `document.createElement()`
- Creating text nodes using `document.createTextNode()`
- Inserting elements with:
  - `before()`
  - `prepend()`
  - `append()`
  - `after()`
- Inserting content using `insertAdjacentHTML()` with positions:
  - `beforebegin`
  - `afterbegin`
  - `beforeend`
  - `afterend`
- Removing nodes from the DOM using `node.remove()`
- Cloning elements using `elem.cloneNode()` (shallow and deep cloning)
- Using `DocumentFragment` to improve performance when adding multiple nodes to the DOM



> [Home](#home)

###### 3
## سوالات و مشکلات⁉️
مثالی عملی از document Fragment
> [Home](#home)
---
###### 4
## 🧪 تست‌ها و خروجی‌ها
[Code File](main.html)

> [Home](#home)