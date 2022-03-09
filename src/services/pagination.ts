export interface IPagination {
    rows: Array<Object>,
    current_page: number,
    total_page: number,
    total_row: number
}

export default {
    getPaginationData(total, size, page) {
        size = parseInt(size);
        page = parseInt(page);
        let skip;

        if (page == 1) {
            skip = 0
        } else {
            skip = parseInt(size) * (parseInt(page) - 1)
        }

        const pages = Math.floor(total / size);
        const totalPage = total <= size ? 1 : (total % size == 0 ? pages : pages + 1);

        return {
            skip, totalPage
        }
    }
}