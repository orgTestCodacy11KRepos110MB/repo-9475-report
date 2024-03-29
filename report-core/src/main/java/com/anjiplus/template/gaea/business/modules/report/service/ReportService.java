package com.anjiplus.template.gaea.business.modules.report.service;

import com.anji.plus.gaea.curd.service.GaeaBaseService;
import com.anjiplus.template.gaea.business.modules.report.controller.dto.ReportDto;
import com.anjiplus.template.gaea.business.modules.report.controller.param.ReportParam;
import com.anjiplus.template.gaea.business.modules.report.dao.entity.Report;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

/**
 *
 * @author chenkening
 * @date 2021/3/26 10:35
 */
public interface ReportService extends GaeaBaseService<ReportParam, Report> {


    /**
     * 下载次数+1
     * @param reportCode
     */
    void downloadStatistics(String reportCode);

    /**
     * 复制大屏
     * @param dto
     */
    void copy(ReportDto dto);

    /**
     * 报表列表免token查询，并携带分享大屏永久链接
     * @param param
     * @return
     */
    Page<ReportDto> sharePageList(ReportParam param);
}
