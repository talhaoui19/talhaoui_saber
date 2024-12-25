"use client";

import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Page = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (id) => {
    setCopied((prevState) => ({ ...prevState, [id]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [id]: false }));
    }, 3000);
  };
  return (
    <>
      <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
        <div className="flex min-h-[60vh] w-full items-center justify-center py-6 xs:py-10">
          <article className="prose w-full max-w-2xl">
            <header className="mb-4 border-x border-dashed border-light-400 bg-gradient-to-t from-light-50 via-white to-light-50 p-4 dark:border-dark-700 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
              <nav className="muted-text flex w-full max-w-2xl select-none gap-2">
                <Link
                  className="text-sm !text-light-950 !no-underline hover:!text-dark-50 dark:!text-dark-50 dark:hover:!text-light-950"
                  href="/"
                ></Link>
                <span className="text-sm text-primary-500/50">&gt;</span>
                <Link
                  className="text-sm !text-light-950 !no-underline hover:!text-dark-50 dark:!text-dark-50 dark:hover:!text-light-950"
                  href="/ar/blog"
                ></Link>
                <span className="text-sm text-primary-500/50">&gt;</span>
                <div className="h-fit truncate px-1 text-sm"></div>
              </nav>
              <h1 className="m-0 mb-2"></h1>
              <section className="flex w-full items-center justify-end gap-4 mb-4"></section>
              <div className="flex flex-col justify-between text-xs md:flex-row border-t border-dashed border-light-500 pt-2 dark:border-[#191919]">
                <p className="m-0 w-full text-light-900">
                  <Link
                    className="!px-0 font-semibold hover:underline hover:decoration-[#0072d3]"
                    href="/"
                  ></Link>{" "}
                  <span className="font-bold text-primary-600"></span>.
                </p>
              </div>
            </header>
            <div className="prose lg:prose-xl p-1 py-4 sm:p-4" />

            <main className="p-1 py-4 sm:p-4">
              <p>
                البرمجة ليست دائمًا مثالية، ويحدث أن تصادفنا أخطاء أثناء كتابة
                الأكواد أو تشغيلها. تتراوح هذه الأخطاء من أخطاء بسيطة مثل أخطاء
                النحو إلى أخطاء أكثر تعقيدًا مثل الاستثناءات (Exceptions) التي
                تحدث أثناء تنفيذ البرنامج. من المهم تعلم كيفية التعامل مع هذه
                الأخطاء بطريقة صحيحة لضمان سلاسة أداء التطبيق وتجنب تعطل الأنظمة
                أو التطبيقات البرمجية. في هذه المقالة، سنستعرض كيفية التعامل مع
                الأخطاء في JavaScript بدءًا من الأخطاء البسيطة وصولاً إلى
                التعامل مع الاستثناءات.
              </p>
              <ol start={1}>
                <li>
                  <p className="dark:text-white">
                    {" "}
                    <strong>فهم أنواع الأخطاء في JavaScript</strong>
                  </p>
                </li>
                <p>في JavaScript، توجد ثلاثة أنواع رئيسية من الأخطاء:</p>
                <ol>
                  <ul>
                    <li className="dark:text-white">
                      <b>أخطاء النحو (Syntax Errors) :</b> تحدث عندما يتم كتابة
                      الكود بشكل غير صحيح مثل نسيان الأقواس أو الفواصل.
                    </li>
                  </ul>
                  <span>مثال :</span>
                  <div className="relative bg-[#2d2d2d] rounded-[4px] border border-gray-800 my-4">
                    <SyntaxHighlighter
                      language="javascript"
                      style={materialDark}
                      customStyle={{
                        direction: "ltr",
                        padding: "0.5rem 1rem 0.5rem",
                        fontSize: "14px",
                        fontFamily: "Roboto Mono, monospace",
                      }}
                    >
                      {`console.log("Hello, World);`}
                    </SyntaxHighlighter>
                    <CopyToClipboard
                      text={`console.log("Hello, World);`}
                      onCopy={() => handleCopy("code1")}
                    >
                      <button className="absolute top-3 right-2 flex items-center gap-1 text-xs text-gray-400 bg-[#2d2d2d] border border-[#3b3b3b] rounded-md px-2 py-1 hover:bg-[#262626] transition">
                        {copied["code1"] ? (
                          <>
                            <FiCheck className="mr-1" />! Copied
                          </>
                        ) : (
                          <>
                            <FiCopy className="mr-1" /> Copy
                          </>
                        )}
                      </button>
                    </CopyToClipboard>
                  </div>
                  <ul className="">
                    <li className="dark:text-white">
                      <b>أخطاء وقت التنفيذ (Runtime Errors) :</b>تحدث أثناء
                      تنفيذ البرنامج عندما يحاول الكود الوصول إلى شيء غير موجود
                      أو غير معرف.
                    </li>
                  </ul>
                  <span>مثال :</span>
                  <div className="relative bg-[#2d2d2d] rounded-[4px] border border-gray-800 my-4">
                    <SyntaxHighlighter
                      language="javascript"
                      style={materialDark}
                      customStyle={{
                        direction: "ltr",
                        padding: "0.5rem 1rem 0.5rem",
                        fontSize: "14px",
                        fontFamily: "Roboto Mono, monospace",
                      }}
                    >
                      {`console.log(undeclaredVariable);`}
                    </SyntaxHighlighter>
                    <CopyToClipboard
                      text={`console.log(undeclaredVariable);`}
                      onCopy={() => handleCopy("code2")}
                    >
                      <button className="absolute top-3 right-2 flex items-center gap-1 text-xs text-gray-400 bg-[#2d2d2d] border border-[#3b3b3b] rounded-md px-2 py-1 hover:bg-[#262626] transition">
                        {copied["code2"] ? (
                          <>
                            <FiCheck className="mr-1" />! Copied
                          </>
                        ) : (
                          <>
                            <FiCopy className="mr-1" /> Copy
                          </>
                        )}
                      </button>
                    </CopyToClipboard>
                  </div>
                  <ul>
                    <li className="dark:text-white">
                      <b>أخطاء المنطق (Logical Errors) :</b>هي الأخطاء التي تحدث
                      عندما يكون الكود مكتوبًا بشكل صحيح نحويًا ولكن لا يعطي
                      النتائج المتوقعة بسبب خطأ في المنطق.
                    </li>
                  </ul>
                  <span>مثال :</span>
                  <div className="relative bg-[#2d2d2d] rounded-[4px] border border-gray-800 my-4">
                    <SyntaxHighlighter
                      language="javascript"
                      style={materialDark}
                      customStyle={{
                        direction: "ltr",
                        padding: "0.5rem 1rem 0.5rem",
                        fontSize: "14px",
                        fontFamily: "Roboto Mono, monospace",
                      }}
                    >
                      {`let total = 10; 
let result = total / 0;`}
                    </SyntaxHighlighter>
                    <CopyToClipboard
                      text={`let total = 10; 
let result = total / 0;`}
                      onCopy={() => handleCopy("code3")}
                    >
                      <button className="absolute top-3 right-2 flex items-center gap-1 text-xs text-gray-400 bg-[#2d2d2d] border border-[#3b3b3b] rounded-md px-2 py-1 hover:bg-[#262626] transition">
                        {copied["code3"] ? (
                          <>
                            <FiCheck className="mr-1" />! Copied
                          </>
                        ) : (
                          <>
                            <FiCopy className="mr-1" /> Copy
                          </>
                        )}
                      </button>
                    </CopyToClipboard>
                  </div>
                </ol>
              </ol>
              <ol start={2}>
                <li>
                  <p className="dark:text-white">
                    {" "}
                    <strong>
                      {" "}
                      استخدام try...catch للتعامل مع الاستثناءات{" "}
                    </strong>
                  </p>
                </li>
              </ol>
              <ol>
                <ul>
                  <li className="dark:text-white">
                    أحيانًا، نحتاج إلى التعامل مع الأخطاء التي قد تحدث أثناء
                    تشغيل الكود، خاصة تلك التي قد تكون خارج سيطرتنا مثل فشل
                    الاتصال بواجهة API خارجية. في هذه الحالات، يمكننا استخدام
                    الكتل try...catch للتعامل مع الأخطاء بشكل مناسب دون توقف
                    البرنامج.{" "}
                  </li>
                </ul>
              </ol>
              <div className="relative bg-[#2d2d2d] rounded-[4px] border border-gray-800 my-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={materialDark}
                  customStyle={{
                    direction: "ltr",
                    padding: "0.5rem 1rem 0.5rem",
                    fontSize: "14px",
                    fontFamily: "Roboto Mono, monospace",
                  }}
                >
                  {`try {
  let data = JSON.parse('{"name": "John}');
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}`}
                </SyntaxHighlighter>
                <CopyToClipboard
                  text={`try {
  let data = JSON.parse('{"name": "John}');
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}`}
                  onCopy={() => handleCopy("code4")}
                >
                  <button className="absolute top-3 right-2 flex items-center gap-1 text-xs text-gray-400 bg-[#2d2d2d] border border-[#3b3b3b] rounded-md px-2 py-1 hover:bg-[#262626] transition">
                    {copied["code4"] ? (
                      <>
                        <FiCheck className="mr-1" />! Copied
                      </>
                    ) : (
                      <>
                        <FiCopy className="mr-1" /> Copy
                      </>
                    )}
                  </button>
                </CopyToClipboard>
              </div>

              <ol>
                <ul>
                  <li className="dark:text-white">
                    في المثال أعلاه، إذا كان هناك خطأ أثناء تحليل JSON، يتم
                    التقاط الخطأ بواسطة الكتلة catch ويقوم البرنامج بطباعة رسالة
                    خطأ بدلاً من التوقف.{" "}
                  </li>
                </ul>
              </ol>
              <ol start={3}>
                <li>
                  <p className="dark:text-white">
                    {" "}
                    <strong>
                      {" "}
                      التعامل مع الأخطاء بشكل مخصص باستخدام throw
                    </strong>
                  </p>
                </li>
                <ol>
                  <ul>
                    <li className="dark:text-white">
                      في بعض الأحيان، قد نحتاج إلى إلقاء (throw) خطأ مخصص بناءً
                      على شروط معينة في الكود الخاص بنا. يمكننا استخدام عبارة
                      throw لإلقاء أخطاء جديدة بناءً على الحالات الخاصة.
                    </li>
                  </ul>
                </ol>
              </ol>
              <div className="relative bg-[#2d2d2d] rounded-[4px] border border-gray-800 my-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={materialDark}
                  customStyle={{
                    direction: "ltr",
                    padding: "0.5rem 1rem 0.5rem",
                    fontSize: "14px",
                    fontFamily: "Roboto Mono, monospace",
                  }}
                >
                  {`function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}`}
                </SyntaxHighlighter>
                <CopyToClipboard
                  text={`function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}`}
                  onCopy={() => handleCopy("code5")}
                >
                  <button className="absolute top-3 right-2 flex items-center gap-1 text-xs text-gray-400 bg-[#2d2d2d] border border-[#3b3b3b] rounded-md px-2 py-1 hover:bg-[#262626] transition">
                    {copied["code5"] ? (
                      <>
                        <FiCheck className="mr-1" />! Copied
                      </>
                    ) : (
                      <>
                        <FiCopy className="mr-1" /> Copy
                      </>
                    )}
                  </button>
                </CopyToClipboard>
              </div>
              <ol>
                <ol>
                  <ul>
                    <li className="dark:text-white">
                      في المثال السابق، إذا كانت القيم المدخلة للقسمة غير صحيحة
                      (على سبيل المثال، قسمة على الصفر)، يتم إلقاء خطأ مخصص ويتم
                      التعامل معه في كتلة catch.
                    </li>
                  </ul>
                </ol>
              </ol>

              <ol start={4}>
                <li>
                  <p className="dark:text-white">
                    {" "}
                    <strong> استخدام finally لتنفيذ الكود في كل الحالات</strong>
                  </p>
                </li>
                <ol>
                  <ul>
                    <li className="dark:text-white">
                      في بعض الأحيان، قد ترغب في تنفيذ بعض التعليمات البرمجية
                      سواءً حدث خطأ أم لا. يمكن القيام بذلك باستخدام كتلة
                      finally، حيث يتم تنفيذ الكود داخل هذه الكتلة بعد تنفيذ try
                      وcatch بغض النظر عما إذا كان هناك خطأ أم لا.
                    </li>
                  </ul>
                </ol>
              </ol>
              <div className="relative bg-[#2d2d2d] rounded-[4px] border border-gray-800 my-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={materialDark}
                  customStyle={{
                    direction: "ltr",
                    padding: "0.5rem 1rem 0.5rem",
                    fontSize: "14px",
                    fontFamily: "Roboto Mono, monospace",
                  }}
                >
                  {`try {
  let result = divide(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("This will run no matter what.");
}`}
                </SyntaxHighlighter>
                <CopyToClipboard
                  text={`try {
  let result = divide(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("This will run no matter what.");
}`}
                  onCopy={() => handleCopy("code6")}
                >
                  <button className="absolute top-3 right-2 flex items-center gap-1 text-xs text-gray-400 bg-[#2d2d2d] border border-[#3b3b3b] rounded-md px-2 py-1 hover:bg-[#262626] transition">
                    {copied["code6"] ? (
                      <>
                        <FiCheck className="mr-1" />! Copied
                      </>
                    ) : (
                      <>
                        <FiCopy className="mr-1" /> Copy
                      </>
                    )}
                  </button>
                </CopyToClipboard>
              </div>

              <ol start={5}>
                <li>
                  <p className="dark:text-white">
                    {" "}
                    <strong>
                      {" "}
                      استخدام الأدوات الخارجية للتعامل مع الأخطاء
                    </strong>
                  </p>
                </li>
                <ol>
                  <ul>
                    <li className="dark:text-white">
                      في التطبيقات الكبيرة والمعقدة، قد لا يكون من العملي تتبع
                      جميع الأخطاء يدويًا. لهذا السبب، يمكنك استخدام أدوات
                      خارجية مثل Sentry أو LogRocket لتتبع الأخطاء والإبلاغ عنها
                      تلقائيًا. توفر هذه الأدوات تقارير مفصلة عن الأخطاء التي
                      تحدث في التطبيقات التي تعمل على المستخدمين، مما يساعد على
                      إصلاحها بسرعة.
                    </li>
                  </ul>
                </ol>
              </ol>
              <h4>الخلاصة</h4>
              <p>
                التعامل مع الأخطاء في JavaScript هو جزء مهم من تطوير البرامج
                والتطبيقات الموثوقة. من خلال فهم أنواع الأخطاء المختلفة واستخدام
                الأدوات المناسبة مثل try...catch وthrow وfinally، يمكن للمبرمجين
                تحسين جودة أكوادهم وتجنب الأعطال المفاجئة. تذكر أن الأخطاء جزء
                طبيعي من عملية البرمجة، ولكن الطريقة التي تتعامل بها مع هذه
                الأخطاء هي ما يجعل برامجك قوية وفعالة.
              </p>
            </main>

            <footer className="mb-10 mt-4 border-x border-dashed border-light-400 bg-gradient-to-t from-light-50 via-white to-light-50 p-4 dark:border-dark-700 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
              <h6 className="pb-4 !text-sm !font-bold !text-dark-900 dark:!text-light-50"></h6>
              <section className="flex w-full items-center justify-evenly gap-4"></section>

              <section className="mt-8 border-t border-dashed border-light-500 pt-4 dark:border-dark-700">
                <h6 className="!text-sm !font-bold !text-dark-900 dark:!text-light-50"></h6>
                <p className="text-sm"></p>
              </section>
            </footer>
          </article>
          <div
            className="fixed inset-0 h-1 origin-[0%] bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500"
            style={{ transform: "scaleX(0) translateZ(0px)" }}
          />
        </div>
      </main>
    </>
  );
};

export default Page;
