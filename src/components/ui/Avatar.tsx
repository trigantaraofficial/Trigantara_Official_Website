'use client';

import Image from 'next/image';
import { User } from 'lucide-react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarStatus = 'online' | 'offline' | 'away' | 'busy' | null;

interface AvatarProps {
    src?: string | null;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
    className?: string;
}

const sizeStyles: Record<AvatarSize, { container: string; text: string; status: string }> = {
    xs: { container: 'w-6 h-6', text: 'text-xs', status: 'w-2 h-2' },
    sm: { container: 'w-8 h-8', text: 'text-sm', status: 'w-2.5 h-2.5' },
    md: { container: 'w-10 h-10', text: 'text-base', status: 'w-3 h-3' },
    lg: { container: 'w-14 h-14', text: 'text-lg', status: 'w-3.5 h-3.5' },
    xl: { container: 'w-20 h-20', text: 'text-2xl', status: 'w-4 h-4' },
};

const statusColors: Record<NonNullable<AvatarStatus>, string> = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
};

function getInitials(name?: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

export default function Avatar({
    src,
    alt = 'Avatar',
    name,
    size = 'md',
    status = null,
    className = '',
}: AvatarProps) {
    const styles = sizeStyles[size];
    const initials = getInitials(name);

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                className={`
                    ${styles.container}
                    rounded-full overflow-hidden
                    bg-white/10 border border-white/10
                    flex items-center justify-center
                `}
            >
                {src ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                    />
                ) : initials ? (
                    <span className={`font-medium text-white/80 ${styles.text}`}>
                        {initials}
                    </span>
                ) : (
                    <User className="w-1/2 h-1/2 text-white/40" />
                )}
            </div>

            {status && (
                <span
                    className={`
                        absolute bottom-0 right-0
                        ${styles.status}
                        ${statusColors[status]}
                        rounded-full ring-2 ring-[#050505]
                    `}
                />
            )}
        </div>
    );
}

// Avatar Group
interface AvatarGroupProps {
    avatars: { src?: string; name?: string }[];
    max?: number;
    size?: AvatarSize;
    className?: string;
}

export function AvatarGroup({
    avatars,
    max = 4,
    size = 'md',
    className = '',
}: AvatarGroupProps) {
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = avatars.length - max;

    return (
        <div className={`flex items-center -space-x-2 ${className}`}>
            {visibleAvatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    src={avatar.src}
                    name={avatar.name}
                    size={size}
                    className="ring-2 ring-[#050505]"
                />
            ))}
            {remainingCount > 0 && (
                <div
                    className={`
                        ${sizeStyles[size].container}
                        rounded-full bg-[#d4a017]/20
                        flex items-center justify-center
                        ring-2 ring-[#050505]
                    `}
                >
                    <span className={`text-[#d4a017] font-medium ${sizeStyles[size].text}`}>
                        +{remainingCount}
                    </span>
                </div>
            )}
        </div>
    );
}
