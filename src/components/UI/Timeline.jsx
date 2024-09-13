import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Timeline = ({ childrenProp }) => {
  return (
    <ol className="relative border-s border-blue-400">
      {childrenProp?.map((children, index) => {
        return (
          <li key={index} className={`${childrenProp?.length - 1 === index ? "" : "mb-10"} ms-3`}>
            {/* ms-*: margin-inline-start */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
              <CalendarMonthIcon color="secondary" />
            </span>
            <h3 className="flex flex-col sm:flex-row items-start sm:items-center mb-1 text-lg font-semibold text-gray-900">
              {children?.title}
              {children?.isLastest && (
                <span className="bg-blue-100 dark:bg-blue-200 text-blue-800 text-sm font-medium sm:me-2 px-2.5 py-0.5 rounded sm:ms-3">
                  Mới nhất
                </span>
              )}
            </h3>

            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {children?.time}
            </time>
            {children?.describe && (
              <p className="text-base font-normal text-yellow-500 dark:text-green-500">
                Mô tả: {children?.describe}
              </p>
            )}

            {children?.children?.length &&
              children?.children?.map((item, ind) => {
                return (
                  <ul key={ind}>
                    <li className={`${children?.children?.length - 1 === ind ? "" : "mb-10"} ms-3`}>
                      {/* ms-*: margin-inline-start */}
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
                        <CalendarMonthIcon color="secondary" />
                      </span>
                      <h3 className="flex flex-wrap sm:flex-nowrap items-baseline mb-1 text-lg font-semibold text-gray-900">
                        <span className="basis-full sm:basis-5/6">
                          Tên dự án: {item?.project}
                        </span>
                        {item?.state === "done" && (
                          <span className="basis-auto sm:basis-1/6 bg-green-200 text-green-800 text-sm font-medium sm:me-2 px-2.5 py-1 rounded sm:ms-3">
                            Đã hoàn thành
                          </span>
                        )}
                        {item?.state === "processing" && (
                          <span className="basis-auto sm:basis-1/6 bg-yellow-200 text-yellow-600 text-sm font-medium sm:me-2 px-2.5 py-1 rounded sm:ms-3">
                            Đang tiến hành
                          </span>
                        )}
                      </h3>

                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                        {item?.time}
                      </time>
                      <p className="mb-2 text-base font-normal text-yellow-500 dark:text-green-500">
                        <span className="mr-1 text-blue-400 text-base">
                          Mô tả:
                        </span>{" "}
                        {item?.describe}
                      </p>
                      <p className="mb-2 text-base font-normal text-yellow-500 dark:text-green-500">
                        <span className="mr-1 text-blue-400 text-base">
                          Teamsize:
                        </span>{" "}
                        {item?.teamsize}
                      </p>
                      <div>
                        <p className="text-blue-400 text-base">
                          Đóng góp cá nhân:
                        </p>
                        <ul className="list-disc">
                          {item?.responsibility?.map((it, id) => {
                            return (
                              <li key={id} className="mx-4">
                                {it}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                );
              })}
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
