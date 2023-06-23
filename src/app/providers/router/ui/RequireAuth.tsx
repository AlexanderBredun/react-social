import { useAppSelector } from '@/app/store/hooks/storeHooks';
import { getFullUser } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
   
	const location = useLocation();
  
	return <Navigate to="/" state={{ from: location }} replace />;
}