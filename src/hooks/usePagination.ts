import { PaginationProps } from 'antd';
import { debounce } from 'lodash';

import { useAppParams } from './useParams';

export const usePagination = ({
  updater
}: {
  updater: (...args: any[]) => any;
}) => {
  const { params, setParams } = useAppParams();

  const debouncedListUpdate = debounce(updater, 100);

  const updatePaginationParams:
    PaginationProps['onChange'] |
    PaginationProps['onShowSizeChange']
    = (page, pageSize) => {
      setParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });
      debouncedListUpdate();
    };

  return {
    params,
    updatePaginationParams,
  };
};
