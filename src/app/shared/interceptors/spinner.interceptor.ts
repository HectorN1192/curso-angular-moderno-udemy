import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize } from 'rxjs';

export const SpinnerInterceptor: HttpInterceptorFn = (request, next) => {
  const _spinnerService = inject(SpinnerService);
  _spinnerService.show();
  return next(request).pipe(finalize(() => _spinnerService.hide()));
};
